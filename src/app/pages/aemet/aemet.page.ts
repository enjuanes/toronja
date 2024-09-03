import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, Inject, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { switchMap, startWith, repeatWhen, takeUntil, debounceTime } from 'rxjs/operators';
import { FAVORITE_COLOR_KEY, TORONJA_COLOR } from 'src/app/core/constants';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { AemetConfigModalComponent } from './components/aemet-config-modal/aemet-config-modal.component';
import { AemetService } from 'src/app/core/services/aemet/aemet.service';

@Component({
  selector: 'app-aemet',
  templateUrl: './aemet.page.html',
  styleUrls: ['./aemet.page.scss'],
})
export class AemetPage implements OnInit, OnDestroy {
  layoutVisible = false;
  isFullscreen = false;

  data: {date: string; tempMin: number; tempMax: number}[] = [];

  subjectHideLayout: Subject<any> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private utilsService: UtilsService,
    private aemetService: AemetService,
    @Inject(DOCUMENT) public document: Document) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove() {
    this.showLayout();
  }

  @HostListener('document:mouseclick', ['$event'])
  onMouseClick() {
    this.showLayout();
  }

  ngOnInit() {
    this.getData();

    this.subjectHideLayout.pipe(debounceTime(3000)).subscribe(() => {
      this.layoutVisible = false;
    });
  }

  getData() {
    this.aemetService.getDailyPrediction().subscribe(response => {
      console.log(response);
      this.data = response[0].prediccion.dia.map(day => (
        {
          date: new Intl.DateTimeFormat(undefined, {year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date(day.fecha)),
          tempMin: day.temperatura.minima,
          tempMax: day.temperatura.maxima,
        }
      ));
    });
  }

  ngOnDestroy(): void {
    this.subjectHideLayout.unsubscribe();
  }


  async openAemetConfig() {
    const modal = await this.modalController.create({
      component: AemetConfigModalComponent
    });

    modal.present();

    await modal.onDidDismiss();
    this.getData();
  }

  showLayout() {
    this.layoutVisible = true;
    if (this.subjectHideLayout) {
      this.subjectHideLayout.next();
    }
  }

  toggleFullScreen() {
    if (!this.document.fullscreenElement) {
        this.document.documentElement.requestFullscreen();
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      }
    }
  }

}
