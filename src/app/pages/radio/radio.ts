import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import Hls from 'hls.js';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { EmojiArtworkService } from '../../core/services/emoji-artwork.service';
import { FaviconService } from '../../core/services/favicon.service';
import { RadioService, RadioStation } from '../../core/services/radio.service';

@Component({
  selector: 'app-radio',
  imports: [Sidebar, ReactiveFormsModule],
  templateUrl: './radio.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Radio implements OnInit {
  private readonly radioService = inject(RadioService);
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly titleService = inject(Title);
  private readonly faviconService = inject(FaviconService);
  private readonly emojiArtwork = inject(EmojiArtworkService);

  private readonly addDialog = viewChild<ElementRef<HTMLDialogElement>>('addDialog');
  private audioElement: HTMLVideoElement | null = null;
  private hls: Hls | null = null;

  protected sidebarOpen = signal(false);
  protected readonly stations = signal<RadioStation[]>([]);
  protected readonly playingId = signal<number | null>(null);
  protected isLoadingStationId = signal<number | null>(null);
  protected isDeleteMode = signal(false);

  protected readonly addForm = this.fb.group({
    emoji: [''],
    name: [''],
    url: ['', Validators.required],
  });

  constructor() {
    this.destroyRef.onDestroy(() => this.stopPlayback());
  }

  async ngOnInit(): Promise<void> {
    await this.radioService.seedDefaultIfEmpty();
    await this.loadStations();
  }

  private async loadStations(): Promise<void> {
    const all = await this.radioService.getAll();
    this.stations.set(all);
  }

  protected openAddDialog(): void {
    this.addForm.reset();
    this.addDialog()?.nativeElement.showModal();
  }

  protected closeAddDialog(): void {
    this.addDialog()?.nativeElement.close();
  }

  protected async onAddSubmit(): Promise<void> {
    if (this.addForm.invalid) return;

    const { emoji, name, url } = this.addForm.getRawValue();
    const count = this.stations().length;

    await this.radioService.add({
      emoji: emoji || '📻',
      name: name || `Radio ${count + 1}`,
      url: url!,
    });

    this.closeAddDialog();
    await this.loadStations();
  }

  protected async deleteStation(id: number): Promise<void> {
    if (this.playingId() === id) {
      this.stopPlayback();
    }
    await this.radioService.delete(id);
    await this.loadStations();
  }

  protected async resetStations(): Promise<void> {
    if (confirm('Are you sure you want to reset all stations to default? This cannot be undone.')) {
      this.stopPlayback();
      await this.radioService.resetRadios();
      await this.loadStations();
    }
  }

  protected playStation(station: RadioStation): void {
    this.stopPlayback();

    this.audioElement = document.createElement('video');

    // set station name in video element
    this.audioElement.setAttribute('title', station.name + 'asdasd');
    this.audioElement.onpause = () => {
      this.stopPlayback();
    };

    let playPromise: Promise<void> = Promise.resolve();

    const url = station.url;
    this.isLoadingStationId.set(station.id!);
    if (url.includes('.m3u8')) {
      if (this.audioElement.canPlayType('application/vnd.apple.mpegurl')) {
        this.audioElement.src = url;
        playPromise = this.audioElement.play();
      } else if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(url);
        this.hls.attachMedia(this.audioElement);
        playPromise = this.audioElement.play();
      }
    } else {
      this.audioElement.src = url;
      playPromise = this.audioElement.play();
    }

    playPromise
      ?.then(() => {
        this.isLoadingStationId.set(null);
        this.playingId.set(station.id!);
        this.titleService.setTitle(`${station.name}`);
        this.faviconService.setFavicon(this.emojiArtwork.generateArtworkUrl(station.emoji, 128));
        this.updateMediaSession(station);
      })
      .catch(() => {
        this.stopPlayback();
        alert('Failed to play the station. Please check the URL or try another station.');
      });
  }

  protected stopPlayback(): void {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
    if (this.audioElement) {
      this.audioElement.onpause = null;
      this.audioElement.pause();
      this.audioElement.src = '';
      this.audioElement = null;
    }
    this.isLoadingStationId.set(null);
    this.playingId.set(null);
    this.titleService.setTitle('Radio');
    this.faviconService.resetFavicon();
  }

  private updateMediaSession(station: RadioStation): void {
    if (!('mediaSession' in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: `${station.emoji} ${station.name}`,
      artwork: [
        {
          src: this.emojiArtwork.generateArtworkUrl(station.emoji, 128),
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: this.emojiArtwork.generateArtworkUrl(station.emoji, 256),
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: this.emojiArtwork.generateArtworkUrl(station.emoji, 512),
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    });

    navigator.mediaSession.setActionHandler('play', () => {
      this.audioElement?.play();
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      this.stopPlayback();
    });

    navigator.mediaSession.setActionHandler('previoustrack', () => {
      this.playAdjacentStation(-1);
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => {
      this.playAdjacentStation(1);
    });
  }

  private playAdjacentStation(direction: 1 | -1): void {
    const list = this.stations();
    if (list.length === 0) return;

    const currentIndex = list.findIndex((s) => s.id === this.playingId());
    const nextIndex = (currentIndex + direction + list.length) % list.length;
    this.playStation(list[nextIndex]);
  }
}
