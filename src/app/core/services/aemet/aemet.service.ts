import { Injectable } from '@angular/core';
import { API_KEY_AEMET_KEY, MUNICIPALITY_ID_KEY } from '../../constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { AemetDailyDTO } from '../../models/aemet-daily-dto';


@Injectable({
  providedIn: 'root'
})
export class AemetService {

  baseUrl: string = 'https://opendata.aemet.es/opendata/api';
  apiKey: string;
  municipalityId: string;

  constructor(private http: HttpClient) { }


  refreshUserData() {
    this.apiKey = localStorage.getItem(API_KEY_AEMET_KEY);
    this.municipalityId = localStorage.getItem(MUNICIPALITY_ID_KEY);
  }

  getDailyPrediction(): Observable<AemetDailyDTO[]> {
    this.refreshUserData();
    const url = `${this.baseUrl}/prediccion/especifica/municipio/diaria/${this.municipalityId}/?api_key=${this.apiKey}`;
    return this.http.get<{datos: string}>(url).pipe(
      switchMap(response => this.http.get<AemetDailyDTO[]>(response.datos))
    );
  }
}
