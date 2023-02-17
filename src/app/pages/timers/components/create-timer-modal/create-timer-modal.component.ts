import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { TIMER_DB_NAME } from 'src/app/core/constants';

@Component({
  selector: 'app-create-timer-modal',
  templateUrl: './create-timer-modal.component.html',
  styleUrls: ['./create-timer-modal.component.scss'],
})
export class CreateTimerModalComponent implements OnInit {

  timerForm: FormGroup;

  constructor(
    private modalControlle: ModalController,
    private formBuilder: FormBuilder,
    private dbService: NgxIndexedDBService
  ) {
    this.formDefinition();
  }

  ngOnInit() {}

  formDefinition() {
    this.timerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      hours: [0, [Validators.min(0)]],
      minutes: [0, [Validators.min(0)]],
      seconds: [0, [Validators.min(0)]]
    });
  }

  cancel() {
    return this.modalControlle.dismiss(false, 'cancel');
  }

  create() {
    const { name, hours, minutes, seconds } = this.timerForm.value;

    this.dbService.bulkAdd(TIMER_DB_NAME, [
      {
        name,
        miliseconds: hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000,
      }
    ]).subscribe(() => {
      this.modalControlle.dismiss(true, 'confirm');
    });
  }
}
