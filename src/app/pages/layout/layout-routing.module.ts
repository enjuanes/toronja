import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FavoritePageGuard } from 'src/app/core/guards/favorite-page.guard';
import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    canActivate: [FavoritePageGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardModule)
      }, {
        path: 'color',
        loadChildren: () => import('../color/color.module').then( m => m.ColorModule)
      }, {
        path: 'accelerometer',
        loadChildren: () => import('../accelerometer/accelerometer.module').then( m => m.AccelerometerModule)
      }, {
        path: 'chronometer',
        loadChildren: () => import('../chronometer/chronometer.module').then( m => m.ChronometerModule)
      }, {
        path: 'countdown',
        loadChildren: () => import('../countdown/countdown.module').then( m => m.CountdownModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
