import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TORONJA_COLOR } from 'src/app/core/constants';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {
  @ViewChild('colorInput') colorInput: ElementRef;

  colorPickerOpen = false;
  color = TORONJA_COLOR;

  constructor(route: ActivatedRoute, private modalController: ModalController) {
    route.params.subscribe((params) => {
      this.color = params.color;
      localStorage.setItem('favoriteColor', this.color);
    });
  }

  ngOnInit() {
  }

  async onClickContainer() {
    const modal = await this.modalController.create({
      component: ColorPickerComponent,
      cssClass: 'color-picker-modal',
      componentProps: {
        color: `#${this.color}`
      }
    });

    modal.present();
  }
}
