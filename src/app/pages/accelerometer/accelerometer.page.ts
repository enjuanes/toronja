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

  data: {
    x: number,
    y: number,
    z: number
  };

  dataPerct: {
    x: string,
    y: string,
    z: string
  };

  cordLocked: 'x' | 'y' | 'z';

  acl: any;

  constructor() { }

  ngOnInit() {
    try {
      this.acl = new Accelerometer({frequency: 60});
      this.acl.addEventListener('reading', () => {
        // the value ranges from -10 to 10
        this.accelerometerIsRead = true;
        this.data = {
          x: Math.round(this.acl.x * 100) / 100,
          y: Math.round(this.acl.y * 100) / 100,
          z: Math.round(this.acl.z * 100) / 100
        };
        this.dataPerct = {
          x: `${(this.acl.x + 10) * 5}%`,
          y: `${(this.acl.y + 10) * 5}%`,
          z: `${(this.acl.z + 10) * 5}%`
        };
      });

      this.acl.start();
    } catch (error) {
    }
  }

  lockCord(cord: typeof this.cordLocked) {
    if (this.cordLocked === cord) {
      this.cordLocked = null;
    } else {
      this.cordLocked = cord;
    }
  }

  ngOnDestroy() {
    this.acl.stop();
  }

}
