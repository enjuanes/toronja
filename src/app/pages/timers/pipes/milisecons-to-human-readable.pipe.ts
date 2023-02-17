import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miliseconsToHumanReadable'
})
export class MiliseconsToHumanReadablePipe implements PipeTransform {

  transform(milisecons: number): string {
    milisecons = Number(milisecons) || 0;
    let symbol = '';

    if (milisecons < 0) {
      milisecons = milisecons * -1;
      symbol = '- ';
    }

    let seconds = Math.round(milisecons / 1000);

    let minutes = Math.floor(seconds / 60);
    if (minutes) {
      seconds = seconds % 60;
    }

    const hours = Math.floor(minutes / 60);
    if (hours) {
      minutes = minutes % 60;
    }

    const secondsText = `${seconds < 10 ? '0' :''}${seconds}`;
    const minutesText = `${minutes < 10 ? '0' :''}${minutes}`;
    const hoursText = `${hours < 10 ? '0' :''}${hours}`;

    return `${symbol}${hoursText}:${minutesText}:${secondsText}`;
  }

}
