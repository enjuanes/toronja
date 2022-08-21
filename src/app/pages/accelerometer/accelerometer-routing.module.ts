import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccelerometerPage } from './accelerometer.page';

const routes: Routes = [
  {
    path: '',
    component: AccelerometerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccelerometerRoutingModule {}
