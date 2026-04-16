import { Routes } from '@angular/router';
import { DEFAULT_SLUG, LS_MUNICIPALITY } from './pages/aemet/aemet';
import { DEFAULT_COLOR } from './pages/color/color';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
    title: 'Toronja',
  },
  {
    path: 'chronometer',
    loadComponent: () => import('./pages/chronometer/chronometer').then((m) => m.Chronometer),
    title: 'Chronometer',
  },
  {
    path: 'countdown',
    loadComponent: () =>
      import('./pages/countdown-create/countdown-create').then((m) => m.CountdownCreate),
    title: 'Countdown',
  },
  {
    path: 'countdown/:time',
    loadComponent: () =>
      import('./pages/countdown-display/countdown-display').then((m) => m.CountdownDisplay),
    title: 'Countdown',
  },
  {
    path: 'countdown/:time/:name',
    loadComponent: () =>
      import('./pages/countdown-display/countdown-display').then((m) => m.CountdownDisplay),
    title: 'Countdown',
  },
  {
    path: 'color',
    redirectTo: `color/${localStorage.getItem('FAVORITE_COLOR') || DEFAULT_COLOR}`,
  },
  {
    path: 'color/:color',
    loadComponent: () => import('./pages/color/color').then((m) => m.Color),
    title: 'Color',
  },
  {
    path: 'aemet',
    redirectTo: `aemet/${localStorage.getItem(LS_MUNICIPALITY) || DEFAULT_SLUG}`,
  },
  {
    path: 'aemet/:slug',
    loadComponent: () => import('./pages/aemet/aemet').then((m) => m.Aemet),
    title: 'Aemet',
  },
  {
    path: 'radio',
    loadComponent: () => import('./pages/radio/radio').then((m) => m.Radio),
    title: 'Radio',
  },
  {
    path: 'psicotecnico',
    loadComponent: () =>
      import('./pages/psicotecnico/psicotecnico').then((m) => m.Psicotecnico),
    title: 'Psicotécnico',
  },
];
