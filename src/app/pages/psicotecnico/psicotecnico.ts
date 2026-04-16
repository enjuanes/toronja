import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Sidebar } from '../../core/components/sidebar/sidebar';

export type GameState = 'idle' | 'playing' | 'game_over';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

const LEFT_BASE_X = 200;
const RIGHT_BASE_X = 600;
const TRACK_HALF_WIDTH = 42;
const BALL_RADIUS = 11;
const BALL_Y = Math.round(CANVAS_HEIGHT * 0.73); // ~365px from top

// Cambia SPEED_MAX a un valor mayor que SPEED_INIT para aumentar la velocidad progresivamente
const SPEED_INIT = 0.8;
const SPEED_MAX = 0.8;
const BALL_SPEED = 1.0;
/** Minimum joystick deflection before registering input (avoids drift) */
const GAMEPAD_DEADZONE = 0.12;
/** Axis indices for a standard gamepad layout */
const GAMEPAD_LEFT_STICK_X = 0;
const GAMEPAD_RIGHT_STICK_X = 2;
/** Button index for A (Xbox) / X (PlayStation) */
const GAMEPAD_START_BUTTON = 0;
// Cambia AMPLITUDE_MAX a un valor mayor que AMPLITUDE_INIT para curvas progresivamente más cerradas
const AMPLITUDE_INIT = 65;
const AMPLITUDE_MAX = 65;
const GAME_SECS = 60;
/** Seconds at the start where the tracks are straight and amplitude ramps up */
const WARMUP_SECS = 3;

// Three incommensurate frequencies — combining them produces a non-repeating,
// organic-looking path. Their ratio is not rational so the pattern never loops.
const FREQUENCIES: [number, number, number] = [0.0095, 0.0221, 0.0389];
// Relative contribution of each frequency component (must sum ≤ 1)
const FREQUENCY_WEIGHTS: [number, number, number] = [0.55, 0.3, 0.15];

const COLOR_BACKGROUND = '#1a1a1a';
const COLOR_TRACK = '#cc2200';
const COLOR_BALL_IN_TRACK = '#ffffff';
const COLOR_BALL_OUT_OF_TRACK = '#ff7700';

@Component({
  selector: 'app-psicotecnico',
  imports: [Sidebar],
  templateUrl: './psicotecnico.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Psicotecnico implements AfterViewInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly zone = inject(NgZone);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('gameCanvas');

  protected sidebarOpen = signal(false);
  protected gameState = signal<GameState>('idle');
  protected timeLeft = signal(GAME_SECS);
  protected gamepadConnected = signal(false);
  /** Accumulated time (seconds) either ball has spent outside its track */
  protected timeOutside = signal(0);
  protected muted = signal(false);

  private ctx!: CanvasRenderingContext2D;
  private animationFrameId = 0;
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  private scrollOffset = 0;
  private speed = SPEED_INIT;
  private amplitude = 0;
  private warmupTimeElapsed = 0;
  private elapsedSeconds = 0;

  /** Random phase offsets per track per game — makes every session different */
  private leftPhases: [number, number, number] = [0, 0, 0];
  private rightPhases: [number, number, number] = [0, 0, 0];

  /** Absolute X positions of each ball on the canvas */
  private leftBallX = LEFT_BASE_X;
  private rightBallX = RIGHT_BASE_X;

  private keysHeld = new Set<string>();
  private lastFrameTimestamp = 0;
  /** setInterval handle for the lightweight gamepad polling that runs while idle/game_over */
  private idleGamepadPollingInterval: ReturnType<typeof setInterval> | null = null;
  /** Index of the connected gamepad in navigator.getGamepads() — set by gamepadconnected event */
  private connectedGamepadIndex = -1;
  /** Previous state of the start button — used for rising-edge detection */
  private previousStartButtonState = false;

  /** Created lazily on first user gesture to comply with browser autoplay policy */
  private audioContext: AudioContext | null = null;
  private beepOscillator: OscillatorNode | null = null;
  private beepGainNode: GainNode | null = null;

  private readonly onGamepadConnected = (event: Event) => {
    this.connectedGamepadIndex = (event as GamepadEvent).gamepad.index;
    this.previousStartButtonState = false;
    this.zone.run(() => this.gamepadConnected.set(true));
  };

  private readonly onGamepadDisconnected = (event: Event) => {
    if ((event as GamepadEvent).gamepad.index === this.connectedGamepadIndex) {
      this.connectedGamepadIndex = -1;
    }
    this.zone.run(() => this.gamepadConnected.set(navigator.getGamepads().some(Boolean)));
  };

  private readonly onKeydown = (event: KeyboardEvent) => {
    if (['a', 'A', 'd', 'D', 'ArrowLeft', 'ArrowRight', ' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
    }
    this.keysHeld.add(event.key);
    if ((event.key === ' ' || event.key === 'Enter') && this.gameState() !== 'playing') {
      this.zone.run(() => this.startGame());
    }
  };

  private readonly onKeyup = (event: KeyboardEvent) => {
    this.keysHeld.delete(event.key);
  };

  ngAfterViewInit(): void {
    const canvas = this.canvasRef().nativeElement;
    this.ctx = canvas.getContext('2d')!;
    window.addEventListener('keydown', this.onKeydown);
    window.addEventListener('keyup', this.onKeyup);
    window.addEventListener('gamepadconnected', this.onGamepadConnected);
    window.addEventListener('gamepaddisconnected', this.onGamepadDisconnected);
    this.renderFrame();
    this.startIdleGamepadPolling();
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.onKeydown);
    window.removeEventListener('keyup', this.onKeyup);
    window.removeEventListener('gamepadconnected', this.onGamepadConnected);
    window.removeEventListener('gamepaddisconnected', this.onGamepadDisconnected);
    cancelAnimationFrame(this.animationFrameId);
    this.stopIdleGamepadPolling();
    this.clearTimer();
  }

  protected startGame(): void {
    this.clearTimer();
    cancelAnimationFrame(this.animationFrameId);
    this.stopIdleGamepadPolling();

    this.scrollOffset = 0;
    this.speed = SPEED_INIT;
    this.amplitude = 0;
    this.warmupTimeElapsed = 0;
    this.elapsedSeconds = 0;
    this.timeOutside.set(0);
    this.timeLeft.set(GAME_SECS);
    this.lastFrameTimestamp = 0;
    this.stopBeep();

    // AudioContext must be created after a user gesture (browser autoplay policy)
    this.audioContext ??= new AudioContext();

    // New random phases every game — different curve pattern each run
    const randomPhase = () => Math.random() * Math.PI * 2;
    this.leftPhases = [randomPhase(), randomPhase(), randomPhase()];
    this.rightPhases = [randomPhase(), randomPhase(), randomPhase()];

    // Start balls at the center of their respective tracks
    this.leftBallX = this.trackCenter(LEFT_BASE_X, BALL_Y, 0, this.leftPhases);
    this.rightBallX = this.trackCenter(RIGHT_BASE_X, BALL_Y, 0, this.rightPhases);

    this.gameState.set('playing');

    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
      const remaining = GAME_SECS - this.elapsedSeconds;
      this.zone.run(() => this.timeLeft.set(remaining));
      const progress = this.elapsedSeconds / GAME_SECS;
      this.speed = SPEED_INIT + (SPEED_MAX - SPEED_INIT) * progress;
      this.amplitude = AMPLITUDE_INIT + (AMPLITUDE_MAX - AMPLITUDE_INIT) * progress;
      if (remaining <= 0) this.zone.run(() => this.endGame());
    }, 1000);

    this.zone.runOutsideAngular(() => this.loop(performance.now()));
  }

  private endGame(): void {
    this.clearTimer();
    cancelAnimationFrame(this.animationFrameId);
    this.stopBeep();
    this.gameState.set('game_over');
    this.renderFrame();
    this.startIdleGamepadPolling();
  }

  private clearTimer(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  /** Returns the connected gamepad by stored index, or the first available one */
  private getActiveGamepad(): Gamepad | null {
    const gamepads = navigator.getGamepads();
    if (this.connectedGamepadIndex >= 0) return gamepads[this.connectedGamepadIndex] ?? null;
    for (const gamepad of gamepads) {
      if (gamepad) return gamepad;
    }
    return null;
  }

  /**
   * Polls the start button at ~60 Hz using setInterval with rising-edge detection
   * so a brief press is never missed. Runs while idle or game_over.
   */
  private startIdleGamepadPolling(): void {
    this.stopIdleGamepadPolling();
    this.previousStartButtonState = false;
    this.idleGamepadPollingInterval = setInterval(() => {
      const gamepad = this.getActiveGamepad();
      const isPressed = gamepad?.buttons[GAMEPAD_START_BUTTON]?.pressed ?? false;
      if (isPressed && !this.previousStartButtonState) {
        this.zone.run(() => this.startGame());
      }
      this.previousStartButtonState = isPressed;
    }, 16);
  }

  private stopIdleGamepadPolling(): void {
    if (this.idleGamepadPollingInterval !== null) {
      clearInterval(this.idleGamepadPollingInterval);
      this.idleGamepadPollingInterval = null;
    }
  }

  private loop(timestamp: number): void {
    if (this.gameState() !== 'playing') return;

    const deltaTime = this.lastFrameTimestamp ? (timestamp - this.lastFrameTimestamp) / 1000 : 0;
    this.lastFrameTimestamp = timestamp;

    // Ramp amplitude from 0 → AMPLITUDE_INIT during the warmup window
    if (this.warmupTimeElapsed < WARMUP_SECS) {
      this.warmupTimeElapsed = Math.min(WARMUP_SECS, this.warmupTimeElapsed + deltaTime);
      this.amplitude = AMPLITUDE_INIT * (this.warmupTimeElapsed / WARMUP_SECS);
    }

    this.scrollOffset += this.speed;

    if (this.keysHeld.has('a') || this.keysHeld.has('A')) this.leftBallX -= BALL_SPEED;
    if (this.keysHeld.has('d') || this.keysHeld.has('D')) this.leftBallX += BALL_SPEED;
    if (this.keysHeld.has('ArrowLeft')) this.rightBallX -= BALL_SPEED;
    if (this.keysHeld.has('ArrowRight')) this.rightBallX += BALL_SPEED;

    // Gamepad: left stick → left ball, right stick → right ball
    const gamepad = this.getActiveGamepad();
    if (gamepad) {
      const leftAxis = gamepad.axes[GAMEPAD_LEFT_STICK_X] ?? 0;
      const rightAxis = gamepad.axes[GAMEPAD_RIGHT_STICK_X] ?? 0;
      if (Math.abs(leftAxis) > GAMEPAD_DEADZONE) this.leftBallX += leftAxis * BALL_SPEED;
      if (Math.abs(rightAxis) > GAMEPAD_DEADZONE) this.rightBallX += rightAxis * BALL_SPEED;
    }

    // Clamp balls to canvas
    this.leftBallX = Math.max(BALL_RADIUS, Math.min(CANVAS_WIDTH - BALL_RADIUS, this.leftBallX));
    this.rightBallX = Math.max(BALL_RADIUS, Math.min(CANVAS_WIDTH - BALL_RADIUS, this.rightBallX));

    // Accumulate time outside track
    const leftTrackCenter = this.trackCenter(
      LEFT_BASE_X,
      BALL_Y,
      this.scrollOffset,
      this.leftPhases
    );
    const rightTrackCenter = this.trackCenter(
      RIGHT_BASE_X,
      BALL_Y,
      this.scrollOffset,
      this.rightPhases
    );
    const leftBallOutOfTrack =
      Math.abs(this.leftBallX - leftTrackCenter) > TRACK_HALF_WIDTH - BALL_RADIUS;
    const rightBallOutOfTrack =
      Math.abs(this.rightBallX - rightTrackCenter) > TRACK_HALF_WIDTH - BALL_RADIUS;

    if ((leftBallOutOfTrack || rightBallOutOfTrack) && deltaTime > 0) {
      this.zone.run(() => this.timeOutside.update((seconds) => seconds + deltaTime));
    }

    // Start beep when any ball exits; stop it once all balls are back inside
    if (leftBallOutOfTrack || rightBallOutOfTrack) {
      this.startBeep();
    } else {
      this.stopBeep();
    }

    this.renderFrame();
    this.animationFrameId = requestAnimationFrame((nextTimestamp) => this.loop(nextTimestamp));
  }

  private startBeep(): void {
    if (!this.audioContext || this.beepOscillator || this.muted()) return;
    this.beepGainNode = this.audioContext.createGain();
    this.beepGainNode.gain.value = 0.25;
    this.beepGainNode.connect(this.audioContext.destination);
    this.beepOscillator = this.audioContext.createOscillator();
    this.beepOscillator.frequency.value = 880;
    this.beepOscillator.connect(this.beepGainNode);
    this.beepOscillator.start();
  }

  private stopBeep(): void {
    if (!this.beepOscillator || !this.beepGainNode || !this.audioContext) return;
    // Short fade-out to avoid an audible click when stopping abruptly
    this.beepGainNode.gain.setValueAtTime(
      this.beepGainNode.gain.value,
      this.audioContext.currentTime
    );
    this.beepGainNode.gain.exponentialRampToValueAtTime(
      0.001,
      this.audioContext.currentTime + 0.04
    );
    this.beepOscillator.stop(this.audioContext.currentTime + 0.04);
    this.beepOscillator = null;
    this.beepGainNode = null;
  }

  /**
   * Returns the center X of a track at a given canvas Y coordinate.
   * Uses three combined sinusoids with incommensurate frequencies so the
   * curve never repeats and looks organic rather than mechanical.
   */
  private trackCenter(
    baseX: number,
    y: number,
    scrollOffset: number,
    phases: [number, number, number]
  ): number {
    const position = y + scrollOffset;
    return (
      baseX +
      this.amplitude * FREQUENCY_WEIGHTS[0] * Math.sin(FREQUENCIES[0] * position + phases[0]) +
      this.amplitude * FREQUENCY_WEIGHTS[1] * Math.sin(FREQUENCIES[1] * position + phases[1]) +
      this.amplitude * FREQUENCY_WEIGHTS[2] * Math.sin(FREQUENCIES[2] * position + phases[2])
    );
  }

  private drawTrack(baseX: number, phases: [number, number, number]): void {
    const ctx = this.ctx;
    ctx.beginPath();

    // Left wall (top → bottom)
    ctx.moveTo(this.trackCenter(baseX, 0, this.scrollOffset, phases) - TRACK_HALF_WIDTH, 0);
    for (let y = 2; y <= CANVAS_HEIGHT; y += 2) {
      ctx.lineTo(this.trackCenter(baseX, y, this.scrollOffset, phases) - TRACK_HALF_WIDTH, y);
    }
    // Right wall (bottom → top)
    for (let y = CANVAS_HEIGHT; y >= 0; y -= 2) {
      ctx.lineTo(this.trackCenter(baseX, y, this.scrollOffset, phases) + TRACK_HALF_WIDTH, y);
    }

    ctx.closePath();
    ctx.fillStyle = COLOR_TRACK;
    ctx.fill();
  }

  private drawBall(x: number, inTrack: boolean): void {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x, BALL_Y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = inTrack ? COLOR_BALL_IN_TRACK : COLOR_BALL_OUT_OF_TRACK;
    ctx.fill();
  }

  private renderFrame(): void {
    const ctx = this.ctx;
    ctx.fillStyle = COLOR_BACKGROUND;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    this.drawTrack(LEFT_BASE_X, this.leftPhases);
    this.drawTrack(RIGHT_BASE_X, this.rightPhases);

    const leftTrackCenter = this.trackCenter(
      LEFT_BASE_X,
      BALL_Y,
      this.scrollOffset,
      this.leftPhases
    );
    const rightTrackCenter = this.trackCenter(
      RIGHT_BASE_X,
      BALL_Y,
      this.scrollOffset,
      this.rightPhases
    );
    this.drawBall(
      this.leftBallX,
      Math.abs(this.leftBallX - leftTrackCenter) <= TRACK_HALF_WIDTH - BALL_RADIUS
    );
    this.drawBall(
      this.rightBallX,
      Math.abs(this.rightBallX - rightTrackCenter) <= TRACK_HALF_WIDTH - BALL_RADIUS
    );
  }

  protected formatTime(seconds: number): string {
    const total = Math.max(0, seconds);
    const minutes = Math.floor(total / 60);
    const secs = total % 60;
    return `${minutes}:${String(secs).padStart(2, '0')}`;
  }

  protected formatTimeOutside(seconds: number): string {
    return seconds.toFixed(1) + 's';
  }

  protected getResultLabel(): string {
    const seconds = this.timeOutside();
    if (seconds === 0) return '¡PERFECT!';
    if (seconds < 0.5) return '¿Eres un robot?';
    if (seconds < 2) return 'Excelente';
    if (seconds < 4) return 'Muy bien';
    if (seconds < 7) return 'Bien';
    if (seconds < 11) return 'Pasable';
    if (seconds < 16) return 'Flojillo';
    if (seconds < 22) return 'Malo';
    if (seconds < 30) return 'Muy malo';
    return 'Comprate unas manos';
  }

  protected getResultColor(): string {
    const seconds = this.timeOutside();
    if (seconds === 0) return 'text-yellow-300';
    if (seconds < 0.5) return 'text-purple-400';
    if (seconds < 2) return 'text-green-400';
    if (seconds < 4) return 'text-green-300';
    if (seconds < 7) return 'text-blue-400';
    if (seconds < 11) return 'text-yellow-400';
    if (seconds < 16) return 'text-orange-400';
    if (seconds < 22) return 'text-red-400';
    if (seconds < 30) return 'text-red-500';
    return 'text-red-600';
  }
}

