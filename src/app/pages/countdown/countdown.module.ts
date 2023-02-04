import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountdownRoutingModule } from './countdown-routing.module';

import { CountdownPage } from './countdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountdownRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CountdownPage]
})
export class CountdownModule {}
