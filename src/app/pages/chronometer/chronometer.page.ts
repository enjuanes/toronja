import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CHRONOMETER_START_KEY, CHRONOMETER_PAUSE_KEY } from 'src/app/core/constants';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.page.html',
  styleUrls: ['./chronometer.page.scss'],
})
export class ChronometerPage {

  timerSuscription: Subscription;

  chronometerStart: Date;
  chronometerPause: Date;
  chronometerText: string = '00:00:00';

  constructor() { }

  ionViewDidEnter() {
    if (localStorage.getItem(CHRONOMETER_START_KEY) && new Date(localStorage.getItem(CHRONOMETER_START_KEY))) {
      this.chronometerStart = new Date(localStorage.getItem(CHRONOMETER_START_KEY));
    }

    if (localStorage.getItem(CHRONOMETER_PAUSE_KEY) && new Date(localStorage.getItem(CHRONOMETER_PAUSE_KEY))) {
      this.chronometerPause = new Date(localStorage.getItem(CHRONOMETER_PAUSE_KEY));
    }

    this.timerSuscription = timer(0, 1000).subscribe(() => {
      const date = this.chronometerPause ? this.chronometerPause : new Date();

      if (this.chronometerStart) {
        let secondsDiff = Math.round((date.getTime() - this.chronometerStart.getTime()) / 1000);

        let minutesDiff = Math.floor(secondsDiff / 60);
        if (minutesDiff) {
          secondsDiff = secondsDiff % 60;
        }

        const hoursDiff = Math.floor(minutesDiff / 60);
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
    if (this.chronometerPause) {
      const diff = this.chronometerPause.getTime() - this.chronometerStart.getTime();
      this.chronometerStart = new Date(new Date().getTime() - diff);
      localStorage.setItem(CHRONOMETER_START_KEY, this.chronometerStart.toISOString());
      this.chronometerPause = null;
      localStorage.removeItem(CHRONOMETER_PAUSE_KEY);
    } else {
      this.chronometerStart = new Date();
      localStorage.setItem(CHRONOMETER_START_KEY, this.chronometerStart.toISOString());
    }
  }

  pause() {
    this.chronometerPause = new Date();
    localStorage.setItem(CHRONOMETER_PAUSE_KEY, this.chronometerPause.toISOString());
  }

  stop() {
    this.chronometerStart = null;
    this.chronometerPause = null;
    this.chronometerText = '00:00:00';
    document.title = 'Toronja';
    localStorage.removeItem(CHRONOMETER_START_KEY);
    localStorage.removeItem(CHRONOMETER_PAUSE_KEY);
  }
}
