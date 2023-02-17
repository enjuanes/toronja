import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimersRoutingModule } from './timers-routing.module';

import { TimersPage } from './timers.page';
import { CreateTimerModalComponent } from './components/create-timer-modal/create-timer-modal.component';
import { MiliseconsToHumanReadablePipe } from './pipes/milisecons-to-human-readable.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TimersRoutingModule
  ],
  declarations: [
    TimersPage,
    CreateTimerModalComponent,
    MiliseconsToHumanReadablePipe
  ],
  providers: [
    MiliseconsToHumanReadablePipe
  ]
})
export class TimersModule {}
