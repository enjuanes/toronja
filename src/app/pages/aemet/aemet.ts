import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { AEMET_SKY_EMOJI_FALLBACKS, AEMET_SKY_EMOJI_MAP } from '../../core/constants/aemet.constants';
import { AemetDay, Municipality } from '../../core/models/aemet.models';
import { AemetService } from '../../core/services/aemet.service';
import { EmojiArtworkService } from '../../core/services/emoji-artwork.service';
import { FaviconService } from '../../core/services/favicon.service';

interface WeatherDay {
  date: string;
  emoji: string;
  skyDescription: string;
  tempMin: number;
  tempMax: number;
  precipitation: number;
  wind: number;
  humidityMin: number;
  humidityMax: number;
}

export const DEFAULT_SLUG = 'zaragoza';
const LS_API_KEY = 'AEMET_API_KEY';
export const LS_MUNICIPALITY = 'AEMET_MUNICIPALITY';

@Component({
  selector: 'app-aemet',
  imports: [Sidebar, ReactiveFormsModule],
  templateUrl: './aemet.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Aemet {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly aemetService = inject(AemetService);
  private readonly fb = inject(FormBuilder);
  private readonly titleService = inject(Title);
  private readonly faviconService = inject(FaviconService);
  private readonly emojiArtworkService = inject(EmojiArtworkService);

  private readonly configDialog = viewChild<ElementRef<HTMLDialogElement>>('configDialog');

  protected sidebarOpen = signal(false);
  protected readonly days = signal<WeatherDay[]>([]);
  protected readonly today = computed(() => this.days()[0] ?? null);
  protected readonly cityName = signal('');
  protected readonly loading = signal(false);
  protected readonly error = signal(false);
  protected readonly needsConfig = signal(false);

  private municipalities: Municipality[] = [];
  protected readonly municipalitySearch = signal('');
  protected readonly selectedMunicipality = signal<Municipality | null>(null);
  protected readonly filteredMunicipalities = computed(() => {
    const search = this.municipalitySearch().toLowerCase().trim();
    if (search.length < 2) return [];
    return this.municipalities.filter((municipality) => municipality.name.toLowerCase().includes(search)).slice(0, 10);
  });

  private apiKey = '';
  private slug = DEFAULT_SLUG;

  protected readonly configForm = this.fb.group({
    apiKey: ['', Validators.required],
  });

  constructor() {
    const queryParams = this.route.snapshot.queryParams;
    const routeSlug = this.route.snapshot.params['slug'];

    const qpApiKey = queryParams['apiKey'] ?? queryParams['api_key'];
    const qpSlug = queryParams['slug'];

    this.apiKey = qpApiKey ?? localStorage.getItem(LS_API_KEY) ?? '';
    this.slug = qpSlug ?? routeSlug ?? localStorage.getItem(LS_MUNICIPALITY) ?? DEFAULT_SLUG;

    if (qpApiKey) localStorage.setItem(LS_API_KEY, qpApiKey);
    if (qpSlug) localStorage.setItem(LS_MUNICIPALITY, qpSlug);

    if (!this.apiKey) {
      this.needsConfig.set(true);
      this.loadMunicipalities();
    } else {
      this.loadMunicipalities(() => this.loadData());
    }
  }

  private loadMunicipalities(callback?: () => void): void {
    this.aemetService.getMunicipalities().subscribe({
      next: (data) => {
        this.municipalities = data;
        const current = data.find((municipality) => municipality.slug === this.slug);
        if (current) this.selectedMunicipality.set(current);
        callback?.();
      },
      error: () => callback?.(),
    });
  }

  private loadData(): void {
    const municipality = this.municipalities.find((municipality) => municipality.slug === this.slug);
    if (!municipality) {
      this.error.set(true);
      return;
    }

    this.loading.set(true);
    this.error.set(false);
    this.needsConfig.set(false);
    this.aemetService.getDailyPrediction(municipality.id, this.apiKey).subscribe({
      next: (data) => {
        const cityName = data[0]?.nombre ?? '';
        const days = this.mapDays(data[0]?.prediccion?.dia ?? []);
        this.cityName.set(cityName);
        this.days.set(days);
        this.loading.set(false);
        if (days.length > 0) {
          const todayEmoji = days[0].emoji;
          this.titleService.setTitle(cityName);
          this.faviconService.setFavicon(this.emojiArtworkService.generateArtworkUrl(todayEmoji, 128));
        }
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  protected openConfig(): void {
    this.configForm.setValue({ apiKey: this.apiKey });
    this.municipalitySearch.set('');
    const current = this.municipalities.find((municipality) => municipality.slug === this.slug);
    this.selectedMunicipality.set(current ?? null);
    this.configDialog()?.nativeElement.showModal();
  }

  protected closeConfig(): void {
    this.configDialog()?.nativeElement.close();
  }

  protected onConfigDialogClick(event: MouseEvent): void {
    if (event.target === this.configDialog()?.nativeElement) {
      this.closeConfig();
    }
  }

  protected selectMunicipality(municipality: Municipality): void {
    this.selectedMunicipality.set(municipality);
    this.municipalitySearch.set('');
  }

  protected saveConfig(): void {
    if (this.configForm.invalid || !this.selectedMunicipality()) return;

    const { apiKey } = this.configForm.getRawValue();
    const municipality = this.selectedMunicipality()!;

    this.apiKey = apiKey!;
    this.slug = municipality.slug;

    localStorage.setItem(LS_API_KEY, this.apiKey);
    localStorage.setItem(LS_MUNICIPALITY, this.slug);

    this.closeConfig();
    this.router.navigate(['/aemet', this.slug]);
    this.loadData();
  }

  private getEmoji(skyDescription: string): string {
    const desc = skyDescription.toLowerCase();
    if (AEMET_SKY_EMOJI_MAP[desc]) return AEMET_SKY_EMOJI_MAP[desc];
    for (const [keyword, emoji] of Object.entries(AEMET_SKY_EMOJI_FALLBACKS)) {
      if (keyword && desc.includes(keyword)) return emoji;
    }
    return AEMET_SKY_EMOJI_FALLBACKS[''];
  }

  private mapDays(rawDays: AemetDay[]): WeatherDay[] {
    return rawDays.map((day) => {
      const skyDescription = day.estadoCielo.filter((sky) => sky.descripcion).at(-1)?.descripcion ?? '';

      return {
        date: new Intl.DateTimeFormat(undefined, {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }).format(new Date(day.fecha)),
        emoji: this.getEmoji(skyDescription),
        skyDescription: skyDescription || 'Despejado',
        tempMin: day.temperatura.minima,
        tempMax: day.temperatura.maxima,
        precipitation: day.probPrecipitacion.find((period) => period.periodo === '00-24')?.value ?? Math.max(...day.probPrecipitacion.map((period) => period.value || 0)),
        wind: Math.max(...day.viento.map((wind) => wind.velocidad || 0)),
        humidityMin: day.humedadRelativa.minima,
        humidityMax: day.humedadRelativa.maxima,
      };
    });
  }
}
