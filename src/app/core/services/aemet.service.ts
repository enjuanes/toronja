import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

const AEMET_BASE_URL = 'https://opendata.aemet.es/opendata/api';

export interface AemetDailyDTO {
  nombre: string;
  provincia: string;
  prediccion: {
    dia: AemetDay[];
  };
}

export interface AemetDay {
  fecha: string;
  probPrecipitacion: { value: number; periodo?: string }[];
  estadoCielo: { value: string; periodo?: string; descripcion: string }[];
  viento: { direccion: string; velocidad: number; periodo?: string }[];
  temperatura: { maxima: number; minima: number };
  humedadRelativa: { maxima: number; minima: number };
  uvMax?: number;
}

@Injectable({ providedIn: 'root' })
export class AemetService {
  private readonly http = inject(HttpClient);

  getDailyPrediction(municipalityId: string, apiKey: string): Observable<AemetDailyDTO[]> {
    const url = `${AEMET_BASE_URL}/prediccion/especifica/municipio/diaria/${municipalityId}/`;
    return this.http
      .get<{ datos: string }>(url, { params: { api_key: apiKey } })
      .pipe(switchMap((response) => this.http.get<AemetDailyDTO[]>(response.datos)));
  }
}
