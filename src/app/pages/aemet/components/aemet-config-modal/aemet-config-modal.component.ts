import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { API_KEY_AEMET_KEY, MUNICIPALITY_ID_KEY, TIMER_DB_NAME } from 'src/app/core/constants';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-aemet-config-modal',
  templateUrl: './aemet-config-modal.component.html',
  styleUrls: ['./aemet-config-modal.component.scss'],
})
export class AemetConfigModalComponent implements OnInit {

  aemetForm: FormGroup;

  constructor(
    private modalControlle: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.formDefinition();
  }

  ngOnInit() {
  }

  formDefinition() {
    this.aemetForm = this.formBuilder.group({
      municipalityId: [localStorage.getItem(MUNICIPALITY_ID_KEY) ||  '50297', [Validators.required]],
      apiKey: [localStorage.getItem(API_KEY_AEMET_KEY), [Validators.required]]
    });
  }

  cancel() {
    return this.modalControlle.dismiss(false, 'cancel');
  }

  async save() {
    const { municipalityId, apiKey } = this.aemetForm.value;

    localStorage.setItem(MUNICIPALITY_ID_KEY, municipalityId);
    localStorage.setItem(API_KEY_AEMET_KEY, apiKey);

    this.modalControlle.dismiss(true, 'confirm');
  }
}
