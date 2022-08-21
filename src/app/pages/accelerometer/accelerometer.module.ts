import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccelerometerRoutingModule } from './accelerometer-routing.module';

import { AccelerometerPage } from './accelerometer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccelerometerRoutingModule
  ],
  declarations: [AccelerometerPage]
})
export class AccelerometerModule {}
