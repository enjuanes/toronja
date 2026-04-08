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
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-countdown-display',
  templateUrl: './countdown-display.html',
  styleUrl: './countdown-display.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownDisplay {
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);

  protected readonly name = signal<string | null>(null);
  private readonly targetTime = signal<Date | null>(null);
  private readonly now = signal(new Date());

  protected readonly isPast = computed(() => {
    const target = this.targetTime();
    if (!target) return false;
    return this.now().getTime() > target.getTime();
  });

  protected readonly display = computed(() => {
    const target = this.targetTime();
    if (!target) return '';

    let totalSeconds = Math.floor((target.getTime() - this.now().getTime()) / 1000);
    const negative = totalSeconds < 0;
    totalSeconds = Math.abs(totalSeconds);

    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const parts: string[] = [];
    if (days) parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);
    if (hours) parts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
    if (minutes) parts.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
    parts.push(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);

    return (negative ? '- ' : '') + parts.join(' ');
  });

  private readonly abbreviated = computed(() => {
    const target = this.targetTime();
    if (!target) return '';

    let totalSeconds = Math.floor((target.getTime() - this.now().getTime()) / 1000);
    const negative = totalSeconds < 0;
    totalSeconds = Math.abs(totalSeconds);

    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const parts: string[] = [];
    if (days) parts.push(`${days}d`);
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);
    parts.push(`${seconds}s`);

    return (negative ? '- ' : '') + parts.join(' ');
  });

  constructor() {
    const params = this.route.snapshot.params;
    const epoch = Number(params['time']);
    const date = new Date(epoch * 1000);
    if (!isNaN(date.getTime())) {
      this.targetTime.set(date);
    }
    this.name.set(params['name'] ?? null);

    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.now.set(new Date()));

    effect(() => {
      const abbr = this.abbreviated();
      this.titleService.setTitle(abbr || 'Countdown');
    });
  }
}
