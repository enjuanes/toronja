import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CHRONOMETER_START_KEY } from 'src/app/core/constants';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.page.html',
  styleUrls: ['./chronometer.page.scss'],
})
export class ChronometerPage {

  timerSuscription: Subscription;

  chronometerStart: Date;
  chronometerText: string = '00:00:00';

  constructor() { }

  ionViewDidEnter() {
    if (localStorage.getItem(CHRONOMETER_START_KEY) && new Date(localStorage.getItem(CHRONOMETER_START_KEY))) {
      this.chronometerStart = new Date(localStorage.getItem(CHRONOMETER_START_KEY));
    }

    this.timerSuscription = timer(0, 1000).subscribe(() => {
      if (this.chronometerStart) {
        let secondsDiff = Math.round((new Date().getTime() - this.chronometerStart.getTime()) / 1000);

        let minutesDiff = Math.floor(secondsDiff / 60);
        if (minutesDiff) {
          secondsDiff = secondsDiff % 60;
        }

        let hoursDiff = Math.floor(minutesDiff / 60);
        if (hoursDiff) {
          minutesDiff = minutesDiff % 60;
        }

        const secondsText = `${secondsDiff < 10 ? '0' :''}${secondsDiff}`;
        const minutesText = `${minutesDiff < 10 ? '0' :''}${minutesDiff}`;
        const hoursDiffText = `${hoursDiff < 10 ? '0' :''}${hoursDiff}`;

        this.chronometerText = `${hoursDiffText}:${minutesText}:${secondsText}`;
        document.title = this.chronometerText;
      }
    });
  }

  ionViewDidLeave() {
    this.timerSuscription.unsubscribe();
    document.title = 'Toronja';
  }

  start() {
    this.chronometerStart = new Date();
    localStorage.setItem(CHRONOMETER_START_KEY, this.chronometerStart.toISOString());
  }

  stop() {
    this.chronometerStart = null;
    this.chronometerText = '00:00:00';
    document.title = 'Toronja';
    localStorage.removeItem(CHRONOMETER_START_KEY);
  }
}
