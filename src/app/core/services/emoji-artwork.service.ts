import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmojiArtworkService {
  private readonly cache = new Map<string, string>();
  private readonly fontFamily = "'Roboto', sans-serif";

  generateArtworkUrl(emoji: string, size = 128): string {
    const key = `${emoji}_${size}`;
    const cached = this.cache.get(key);
    if (cached) return cached;

    const canvas = document.createElement('canvas');
    const pixelRatio = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width = size * pixelRatio;
    canvas.height = size * pixelRatio;

    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    ctx.scale(pixelRatio, pixelRatio);
    ctx.font = `${size * 0.95}px ${this.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    const metrics = ctx.measureText(emoji);
    const centeredY =
      size / 2 + (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
    ctx.fillText(emoji, size / 2, centeredY);

    const url = canvas.toDataURL('image/png');
    this.cache.set(key, url);
    return url;
  }
}
