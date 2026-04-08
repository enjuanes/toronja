import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AemetDay, AemetService } from '../../core/services/aemet.service';
import { Sidebar } from '../../core/sidebar/sidebar';

export const DEFAULT_MUNICIPALITY = '50297';
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

  private readonly configDialog = viewChild<ElementRef<HTMLDialogElement>>('configDialog');

  protected sidebarOpen = signal(false);
  protected readonly days = signal<AemetDay[]>([]);
  protected readonly cityName = signal('');
  protected readonly loading = signal(false);
  protected readonly error = signal(false);
  protected readonly needsConfig = signal(false);

  private apiKey = '';
  private municipalityId = DEFAULT_MUNICIPALITY;

  protected readonly configForm = this.fb.group({
    apiKey: ['', Validators.required],
    municipalityId: [DEFAULT_MUNICIPALITY, Validators.required],
  });

  constructor() {
    const queryParams = this.route.snapshot.queryParams;
    const routeId = this.route.snapshot.params['municipalityId'];

    // Priority: query params > localStorage > defaults
    const qpApiKey = queryParams['apiKey'] ?? queryParams['api_key'];
    const qpMunicipality = queryParams['municipalityId'] ?? queryParams['municipality_id'];

    this.apiKey = qpApiKey ?? localStorage.getItem(LS_API_KEY) ?? '';
    this.municipalityId =
      qpMunicipality ?? routeId ?? localStorage.getItem(LS_MUNICIPALITY) ?? DEFAULT_MUNICIPALITY;

    // Persist query param values to localStorage
    if (qpApiKey) localStorage.setItem(LS_API_KEY, qpApiKey);
    if (qpMunicipality) localStorage.setItem(LS_MUNICIPALITY, qpMunicipality);

    if (!this.apiKey) {
      this.needsConfig.set(true);
    } else {
      this.loadData();
    }
  }

  private loadData(): void {
    this.loading.set(true);
    this.error.set(false);
    this.needsConfig.set(false);
    this.aemetService.getDailyPrediction(this.municipalityId, this.apiKey).subscribe({
      next: (data) => {
        this.cityName.set(data[0]?.nombre ?? '');
        this.days.set(data[0]?.prediccion?.dia ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  protected openConfig(): void {
    this.configForm.setValue({
      apiKey: this.apiKey,
      municipalityId: this.municipalityId,
    });
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

  protected saveConfig(): void {
    if (this.configForm.invalid) return;

    const { apiKey, municipalityId } = this.configForm.getRawValue();
    this.apiKey = apiKey!;
    this.municipalityId = municipalityId!;

    localStorage.setItem(LS_API_KEY, this.apiKey);
    localStorage.setItem(LS_MUNICIPALITY, this.municipalityId);

    this.closeConfig();
    this.router.navigate(['/aemet', this.municipalityId]);
    this.loadData();
  }

  protected formatDate(fecha: string): string {
    const date = new Date(fecha);
    return new Intl.DateTimeFormat(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }).format(date);
  }

  protected getMaxPrecipitation(day: AemetDay): number {
    return Math.max(...day.probPrecipitacion.map((p) => p.value || 0));
  }

  protected getSkyDescription(day: AemetDay): string {
    const states = day.estadoCielo.filter((s) => s.descripcion);
    return states.length > 0 ? states[states.length - 1].descripcion : '';
  }

  protected getWeatherIcon(day: AemetDay): string {
    const desc = this.getSkyDescription(day).toLowerCase();
    if (desc.includes('tormenta')) return 'thunderstorm';
    if (desc.includes('nieve') || desc.includes('niev')) return 'ac_unit';
    if (desc.includes('lluvia') || desc.includes('chubas')) return 'rainy';
    if (desc.includes('cubierto')) return 'cloud';
    if (desc.includes('nuboso') || desc.includes('nubes')) return 'cloud';
    if (desc.includes('nub')) return 'partly_cloudy_day';
    if (desc.includes('despejado') || desc === '') return 'clear_day';
    return 'partly_cloudy_day';
  }

  protected getMaxWind(day: AemetDay): number {
    return Math.max(...day.viento.map((v) => v.velocidad || 0));
  }
}
