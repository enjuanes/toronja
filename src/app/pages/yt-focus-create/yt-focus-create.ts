import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { YT_FOCUS_SHOW_CONTROLS_KEY } from '../../core/constants/core.constants';

@Component({
  selector: 'app-yt-focus-create',
  imports: [ReactiveFormsModule, Sidebar],
  templateUrl: './yt-focus-create.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YtFocusCreate {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);

  protected sidebarOpen = signal(false);
  protected invalidUrl = signal(false);

  protected readonly form = this.formBuilder.group({
    url: ['', Validators.required],
    showControls: [localStorage.getItem(YT_FOCUS_SHOW_CONTROLS_KEY) === 'true'],
  });

  private extractVideoId(url: string): string | null {
    const trimmed = url.trim();
    const patterns = [
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/|live\/))([a-zA-Z0-9_-]{11})/,
      /youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];
    for (const pattern of patterns) {
      const match = trimmed.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  protected onSubmit(): void {
    if (this.form.invalid) return;

    const { url, showControls } = this.form.getRawValue();
    const videoId = this.extractVideoId(url ?? '');

    if (!videoId) {
      this.invalidUrl.set(true);
      return;
    }

    localStorage.setItem(YT_FOCUS_SHOW_CONTROLS_KEY, String(!!showControls));

    this.router.navigate(['/yt-focus', videoId], {
      queryParams: showControls ? { controls: '1' } : {},
    });
  }
}
