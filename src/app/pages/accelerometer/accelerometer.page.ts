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
    this.acl = new Accelerometer({frequency: 60});
    this.acl.addEventListener('reading', () => {
      this.accelerometerIsRead = true;
      this.x = this.acl.x;
      this.y = this.acl.y;
      this.z = this.acl.z;
    });

    this.acl.start();
  }

  ngOnDestroy() {
    this.acl.stop();
  }

}
