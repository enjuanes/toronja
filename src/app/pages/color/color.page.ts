import { Component, ElementRef, OnInit, ViewChild, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TORONJA_COLOR } from 'src/app/core/constants';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit, OnDestroy {
  @ViewChild('colorInput') colorInput: ElementRef;

  colorPickerOpen = false;
  color = TORONJA_COLOR;

  constructor(route: ActivatedRoute, private modalController: ModalController, @Inject(DOCUMENT) private document: Document) {
    route.params.subscribe((params) => {
      this.color = params.color;
      localStorage.setItem('favoriteColor', this.color);
      this.changeThemeColor(this.color);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.changeThemeColor(TORONJA_COLOR);
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

  changeThemeColor(color: string) {
    this.document.querySelector('head > meta[name="theme-color"]').remove();
    const elementTheme = this.document.createElement('meta');
    elementTheme.setAttribute('name', 'theme-color');
    elementTheme.setAttribute('content', `#${color}`);
    this.document.querySelector('head').appendChild(elementTheme);
  }
}
