import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yt-focus',
  templateUrl: './yt-focus.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YtFocus {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly embedUrl: SafeResourceUrl | null;

  constructor() {
    const videoId = this.route.snapshot.params['videoId'];
    const showControls = this.route.snapshot.queryParamMap.get('controls') === '1';

    if (!videoId) {
      this.embedUrl = null;
      return;
    }

    const url = `https://www.youtube.com/embed/${videoId}?controls=${showControls ? 1 : 0}`;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

