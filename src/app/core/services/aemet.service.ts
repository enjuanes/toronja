import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AemetApiMeta, AemetDailyDTO, Municipality } from '../models/aemet.models';

const AEMET_BASE_URL = 'https://opendata.aemet.es/opendata/api';

@Injectable({ providedIn: 'root' })
export class AemetService {
  private readonly http = inject(HttpClient);

  getMunicipalities(): Observable<Municipality[]> {
    return this.http.get<Municipality[]>('/json/aemet-municipalities.json');
  }

  getDailyPrediction(municipalityId: string, apiKey: string): Observable<AemetDailyDTO[]> {
    const url = `${AEMET_BASE_URL}/prediccion/especifica/municipio/diaria/${municipalityId}/`;
    return this.http
      .get<AemetApiMeta>(url, { params: { api_key: apiKey } })
      .pipe(switchMap((response) => this.http.get<AemetDailyDTO[]>(response.datos)));
  }
}
