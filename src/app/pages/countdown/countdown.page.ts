import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.scss'],
})
export class CountdownPage {

  countdownSuscription: Subscription;

  isCountdownMode: boolean = false;

  countdownTime: Date;

  countdownName: string;
  countdownTimeLeft: string;
  countdownTimeLeftAbbreviated: string;

  countdownForm: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.route.params.subscribe((params) => {
      this.isCountdownMode = !!new Date(Number(params.time) * 1000).valueOf() && !!String(params.name);
      this.countdownTime = this.isCountdownMode ? new Date(Number(params.time) * 1000) : null;
      this.countdownName = params.name;
      if (this.isCountdownMode) {
        this.setCountdownText();
      }
    });

    this.formDefinition();
  }

  formDefinition() {
    this.countdownForm = this.formBuilder.group({
      time: [null, Validators.required],
      name: [null, Validators.required]
    });
  };

  onSubmitFormCountdown() {
    const value = this.countdownForm.value;
    this.router.navigate(['/countdown', new Date(value.time).getTime() / 1000, value.name]);
  }

  ionViewDidEnter() {
    this.countdownSuscription = timer(0, 1000).subscribe(() => {
      if (this.isCountdownMode) {
        this.setCountdownText();
      } else {
        document.title = 'Toronja';
      }
    });
  }

  ionViewDidLeave() {
    this.countdownSuscription.unsubscribe();
    document.title = 'Toronja';
  }

  setCountdownText() {
    const secondsDiff = this.round((this.countdownTime.getTime() - new Date().getTime()) / 1000);
    const minsDiff = this.round(secondsDiff / 60);
    const hoursDiff = this.round(minsDiff / 60);
    const daysDiff = this.round(hoursDiff / 24);

    const hoursDiffFormated = hoursDiff - daysDiff * 24;
    const minsDiffFormated = minsDiff - hoursDiff * 60;
    const secondsDiffFormated = secondsDiff - minsDiff * 60;

    this.countdownTimeLeft = '';
    this.countdownTimeLeftAbbreviated = '';

    if (secondsDiff < 0) {
      this.countdownTimeLeft += `- `;
      this.countdownTimeLeftAbbreviated += `- `;
    }

    if (daysDiff !== 0) {
      this.countdownTimeLeft += `${this.positive(daysDiff)} ${this.plural(daysDiff, 'day')} `;
      this.countdownTimeLeftAbbreviated += `${this.positive(daysDiff)}d `;
    }

    if (hoursDiffFormated !== 0) {
      this.countdownTimeLeft += `${this.positive(hoursDiffFormated)} ${this.plural(hoursDiffFormated, 'hour')} `;
      this.countdownTimeLeftAbbreviated += `${this.positive(hoursDiffFormated)}h `;
    }

    if (minsDiffFormated !== 0) {
      this.countdownTimeLeft += `${this.positive(minsDiffFormated)} ${this.plural(minsDiffFormated, 'minute')} `;
      this.countdownTimeLeftAbbreviated += `${this.positive(minsDiffFormated)}m `;
    }

    this.countdownTimeLeft += `${this.positive(secondsDiffFormated)} ${this.plural(secondsDiffFormated, 'second')}`;
    this.countdownTimeLeftAbbreviated += `${this.positive(secondsDiffFormated)}s`;

    document.title = this.countdownTimeLeftAbbreviated;
  }

  round(numberTime: number) {
    return numberTime >= 0 ? Math.floor(numberTime)  :  Math.ceil(numberTime);
  }

  positive(numberTime: number) {
    return numberTime < 0 ? numberTime * -1  :  numberTime;
  }

  plural(numberTime: number, text: string) {
    if (numberTime < 0) {
      return numberTime < 1 ? `${text}s` : text;
    } else {
      return numberTime > 1 ? `${text}s` : text;
    }
  }
}
