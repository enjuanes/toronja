import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChronometerRoutingModule } from './chronometer-routing.module';

import { ChronometerPage } from './chronometer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronometerRoutingModule
  ],
  declarations: [ChronometerPage]
})
export class ChronometerModule {}
