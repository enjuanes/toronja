import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmojiArtworkService {
  private readonly cache = new Map<string, string>();

  generateArtworkUrl(emoji: string, size = 128): string {
    const key = `${emoji}_${size}`;
    const cached = this.cache.get(key);
    if (cached) return cached;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d')!;
    ctx.font = `${size * 0.6}px 'Roboto', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, size / 2, size / 2);

    const url = canvas.toDataURL('image/png');
    this.cache.set(key, url);
    return url;
  }
}
