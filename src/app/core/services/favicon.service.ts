import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  private document = inject(DOCUMENT);

  setFavicon(url: string, type: string = 'image/png'): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel*='icon']");

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'icon';
      this.document.head.appendChild(link);
    }

    link.href = url;
    link.type = type;
  }

  resetFavicon(): void {
    const defaultFavicon = 'images/logo.png';
    this.setFavicon(defaultFavicon, 'image/png');
  }
}
