import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TORONJA_COLOR } from 'src/app/core/constants';

import { ColorPage } from './color.page';

const routes: Routes = [
  {
    path: '',
    component: ColorPage
  },
  {
    path: ':color',
    component: ColorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorRoutingModule {}
