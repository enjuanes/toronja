import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, Inject, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { switchMap, startWith, repeatWhen, takeUntil, debounceTime } from 'rxjs/operators';
import { TORONJA_COLOR } from 'src/app/core/constants';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit, OnDestroy {
  @ViewChild('colorInput') colorInput: ElementRef;

  colorPickerOpen = false;
  color = TORONJA_COLOR;

  layoutVisible = false;
  isFullscreen = false;

  subscriptionUrlChange: Subscription;
  subjectHideLayout: Subject<any> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private utilsService: UtilsService,
    @Inject(DOCUMENT) public document: Document) {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove() {
    this.showLayout();
  }

  @HostListener('document:mouseclick', ['$event'])
  onMouseClick() {
    this.showLayout();
  }

  ngOnInit() {
    this.subscriptionUrlChange = this.route.params.subscribe((params) => {
      this.color = params.color;
      if (this.color) {
        localStorage.setItem('favoriteColor', this.color);
        this.utilsService.changeThemeColor(this.color);
      } else {
        this.router.navigate(['color', localStorage.getItem('favoriteColor') ? localStorage.getItem('favoriteColor') :  TORONJA_COLOR]);
      }
    });

    this.subjectHideLayout.pipe(debounceTime(3000)).subscribe(() => {
      this.layoutVisible = false;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionUrlChange.unsubscribe();
    this.subjectHideLayout.unsubscribe();
  }

  async openColorPicker() {
    const modal = await this.modalController.create({
      component: ColorPickerComponent,
      cssClass: 'color-picker-modal',
      componentProps: {
        color: `#${this.color}`
      }
    });

    modal.present();
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
