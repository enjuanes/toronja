import { Component, OnDestroy, OnInit } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const Accelerometer;

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.page.html',
  styleUrls: ['./accelerometer.page.scss'],
})
export class AccelerometerPage implements OnInit, OnDestroy {

  accelerometerIsRead = false;

  x: number;
  y: number;
  z: number;

  acl: any;

  constructor() { }

  ngOnInit() {
    try {
      this.acl = new Accelerometer({frequency: 60});
      this.acl.addEventListener('reading', () => {
        this.accelerometerIsRead = true;
        this.x = Math.round(this.acl.x * 100) / 100;
        this.y = Math.round(this.acl.y * 100) / 100;
        this.z = Math.round(this.acl.z * 100) / 100;
      });

      this.acl.start();
    } catch (error) {
    }
  }

  ngOnDestroy() {
    this.acl.stop();
  }

}
