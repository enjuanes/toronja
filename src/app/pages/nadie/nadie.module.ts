import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NadieRoutingModule } from './nadie-routing.module';

import { NadiePage } from './nadie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NadieRoutingModule
  ],
  declarations: [NadiePage]
})
export class NadieModule {}
