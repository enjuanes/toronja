import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TORONJA_COLOR } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(@Inject(DOCUMENT) private document: Document, private toastController: ToastController) {
  }

  changeThemeColor(color: string) {
    const themeColorMeta = this.document.querySelector('head > meta[name="theme-color"]');

    if (themeColorMeta && themeColorMeta.getAttribute('content') !== `#${color}`) {
      themeColorMeta.setAttribute('content', `#${color}`);
    }
  }

  resetThemeColor() {
    this.changeThemeColor(TORONJA_COLOR);
  }

  showToast(message: string, duration: number = 2000) {
   return this.toastController.create({
      message,
      duration
    }).then(toast => toast.present());
  }
}
