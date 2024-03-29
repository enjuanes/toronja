import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountdownPage } from './countdown.page';

const routes: Routes = [
  {
    path: '',
    component: CountdownPage
  },
  {
    path: ':time',
    component: CountdownPage
  },
  {
    path: ':time/:name',
    component: CountdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountdownRoutingModule {}
