// Response from Step 1: GET /prediccion/especifica/municipio/diaria/{id}/
export interface AemetApiMeta {
  descripcion: string;
  estado: number;
  datos: string;
  metadatos: string;
}

export interface AemetOrigen {
  productor: string;
  web: string;
  enlace: string;
  language: string;
  copyright: string;
  notaLegal: string;
}

export interface AemetPeriodNumber {
  value: number;
  periodo?: string;
}

// AEMET returns "" when no snow level is forecasted
export interface AemetPeriodStringOrNumber {
  value: string | number;
  periodo?: string;
}

export interface AemetSkyState {
  value: string;
  periodo?: string;
  descripcion: string;
}

export interface AemetWind {
  direccion: string;
  velocidad: number;
  periodo?: string;
}

export interface AemetHourlyValue {
  value: number;
  hora: number;
}

export interface AemetRangeWithHourly {
  maxima: number;
  minima: number;
  dato: AemetHourlyValue[];
}

// Response from Step 2: GET {datos URL}
export interface AemetDay {
  fecha: string;
  probPrecipitacion: AemetPeriodNumber[];
  cotaNieveProv: AemetPeriodStringOrNumber[];
  estadoCielo: AemetSkyState[];
  viento: AemetWind[];
  rachaMax: AemetPeriodStringOrNumber[];
  temperatura: AemetRangeWithHourly;
  sensTermica: AemetRangeWithHourly;
  humedadRelativa: AemetRangeWithHourly;
  uvMax?: number;
}

export interface AemetDailyDTO {
  origen: AemetOrigen;
  elaborado: string;
  nombre: string;
  provincia: string;
  prediccion: {
    dia: AemetDay[];
  };
  id: number;
  version: number;
}

export interface Municipality {
  id: string;
  name: string;
  slug: string;
}
