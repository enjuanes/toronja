import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Subscription, timer } from 'rxjs';
import { TIMER_DB_NAME } from 'src/app/core/constants';
import { Timer } from 'src/app/core/models/timer';
import { CreateTimerModalComponent } from './components/create-timer-modal/create-timer-modal.component';
import { MiliseconsToHumanReadablePipe } from './pipes/milisecons-to-human-readable.pipe';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.page.html',
  styleUrls: ['./timers.page.scss'],
})
export class TimersPage implements OnInit {

  timerSuscription: Subscription;

  timerSelected: Timer;
  timers: Timer[];

  milisecondsLeft: number;
  timerStar: Date;

  constructor(
    private dbService: NgxIndexedDBService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private miliseconsToHumanReadablePipe: MiliseconsToHumanReadablePipe
  ) {
    this.route.data.subscribe(data => {
      if (data.timer) {
        this.timerStar = new Date();
        this.timerSelected = data.timer;

        this.setMilisecondsLeft();
      }
    });
  }

  ngOnInit() {
    this.loadTimers();
  }

  loadTimers() {
    this.dbService.getAll(TIMER_DB_NAME).subscribe((timers: Timer[]) => {
      this.timers = timers;
    });
  }

  deleteTimer(item: Timer) {
    this.dbService.deleteByKey(TIMER_DB_NAME, item.id).subscribe(() => {
      this.loadTimers();
    });
  }

  async addTimer() {
    const modal = await this.modalController.create({
      component: CreateTimerModalComponent
    });

    modal.present();

    modal.onDidDismiss().then((refreshTimers) => {
      if (refreshTimers) {
        this.loadTimers();
      }
    });
  }

  starStopTimer() {
    this.timerStar = this.timerStar ? null : new Date();
    this.setMilisecondsLeft();
  }

  setMilisecondsLeft() {
    if (this.timerStar) {
      this.milisecondsLeft =  this.timerSelected.miliseconds - ((new Date()).getTime() - this.timerStar.getTime());
    } else {
      this.milisecondsLeft =  this.timerSelected.miliseconds;
    }
  }

  ionViewDidEnter() {
    this.timerSuscription = timer(0, 1000).subscribe(() => {
      if (this.timerSelected) {
        this.setMilisecondsLeft();

        if (this.milisecondsLeft < 0) {
          document.title =
            (Math.round(this.milisecondsLeft/1000) % 2 === 0)
              ? this.miliseconsToHumanReadablePipe.transform(this.milisecondsLeft)
              : '⏳ Time Up ⌛';
        } else {
          document.title = this.miliseconsToHumanReadablePipe.transform(this.milisecondsLeft);
        }
      }
    });
  }

  ionViewDidLeave() {
    this.timerSuscription.unsubscribe();
    document.title = 'Toronja';
  }
}
