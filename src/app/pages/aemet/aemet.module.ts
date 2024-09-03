import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AemetRoutingModule } from './aemet-routing.module';

import { AemetPage } from './aemet.page';
import { AemetConfigModalComponent } from './components/aemet-config-modal/aemet-config-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AemetRoutingModule
  ],
  declarations: [AemetPage, AemetConfigModalComponent]
})
export class AemetModule {}
