import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AemetPage } from './aemet.page';

const routes: Routes = [
  {
    path: '',
    component: AemetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AemetRoutingModule {}
