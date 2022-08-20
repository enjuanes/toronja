import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TORONJA_COLOR } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  changeThemeColor(color: string) {
    this.document.querySelector('head > meta[name="theme-color"]').remove();
    const elementTheme = this.document.createElement('meta');
    elementTheme.setAttribute('name', 'theme-color');
    elementTheme.setAttribute('content', `#${color}`);
    this.document.querySelector('head').appendChild(elementTheme);
  }

  resetThemeColor() {
    this.changeThemeColor(TORONJA_COLOR);
  }
}
