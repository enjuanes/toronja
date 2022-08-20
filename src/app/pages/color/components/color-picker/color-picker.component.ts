import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit, OnDestroy {

  color: string;

  colorChangedObservable: Subject<void> = new Subject<void>();

  constructor(private modalController: ModalController, private router: Router) {
    this.colorChangedObservable.pipe(debounceTime(500)).subscribe(() => {
      this.router.navigate(['color', this.color.replace('#', '')]);
    });
  }

  ngOnInit(): void  {
  }

  ngOnDestroy(): void {
    this.colorChangedObservable.unsubscribe();
  }

  onColorChange() {
    this.colorChangedObservable.next();
  }
}
