import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { TIMER_DB_NAME } from 'src/app/core/constants';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

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
    private dbService: NgxIndexedDBService,
    private utilsService: UtilsService
  ) {
    this.formDefinition();
  }

  ngOnInit() {
    this.dbService.count(TIMER_DB_NAME).subscribe(count => {
      this.timerForm.get('name').setValue(`Timer ${count + 1}`);
    });
  }

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

  async create() {
    const { name, hours, minutes, seconds } = this.timerForm.value;

    const timer = await this.dbService.getByIndex(TIMER_DB_NAME, 'name', name).toPromise();

    if (timer) {
      this.utilsService.showToast('Timer already exists');
    } else {
      this.dbService.bulkAdd(TIMER_DB_NAME, [
        {
          name,
          miliseconds: hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000,
        }
      ]).subscribe(() => this.modalControlle.dismiss(true, 'confirm'));
    }

  }
}
