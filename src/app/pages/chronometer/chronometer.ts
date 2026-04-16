import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { CHRONOMETER_PAUSE_KEY, CHRONOMETER_START_KEY } from '../../core/constants/core.constants';

@Component({
  selector: 'app-chronometer',
  imports: [Sidebar],
  templateUrl: './chronometer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chronometer {
  private readonly destroyRef = inject(DestroyRef);
  private readonly titleService = inject(Title);

  protected sidebarOpen = signal(false);

  private readonly startTime = signal<Date | null>(this.loadDate(CHRONOMETER_START_KEY));
  private readonly pauseTime = signal<Date | null>(this.loadDate(CHRONOMETER_PAUSE_KEY));
  private readonly now = signal(new Date());

  protected readonly running = computed(() => !!this.startTime() && !this.pauseTime());
  protected readonly started = computed(() => !!this.startTime());

  protected readonly display = computed(() => {
    const start = this.startTime();
    if (!start) return '00:00:00';

    const end = this.pauseTime() ?? this.now();
    let totalSeconds = Math.abs(Math.floor((end.getTime() - start.getTime()) / 1000));

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds].map((n) => String(n).padStart(2, '0')).join(':');
  });

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.now.set(new Date()));

    effect(() => {
      this.titleService.setTitle(this.display());
    });
  }

  protected start(): void {
    const pause = this.pauseTime();
    const startVal = this.startTime();

    if (pause && startVal) {
      const elapsed = pause.getTime() - startVal.getTime();
      const newStart = new Date(Date.now() - elapsed);
      this.startTime.set(newStart);
      localStorage.setItem(CHRONOMETER_START_KEY, newStart.toISOString());
      this.pauseTime.set(null);
      localStorage.removeItem(CHRONOMETER_PAUSE_KEY);
    } else {
      const now = new Date();
      this.startTime.set(now);
      localStorage.setItem(CHRONOMETER_START_KEY, now.toISOString());
    }
  }

  protected pause(): void {
    const now = new Date();
    this.pauseTime.set(now);
    localStorage.setItem(CHRONOMETER_PAUSE_KEY, now.toISOString());
  }

  protected stop(): void {
    this.startTime.set(null);
    this.pauseTime.set(null);
    localStorage.removeItem(CHRONOMETER_START_KEY);
    localStorage.removeItem(CHRONOMETER_PAUSE_KEY);
  }

  private loadDate(key: string): Date | null {
    const val = localStorage.getItem(key);
    if (!val) return null;
    const date = new Date(val);
    return isNaN(date.getTime()) ? null : date;
  }
}
