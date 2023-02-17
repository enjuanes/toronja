import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TIMER_DB_NAME } from '../constants';
import { Timer } from '../models/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerResolver implements Resolve<Timer> {
  constructor(private dbService: NgxIndexedDBService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Timer> {
    return this.dbService.getByIndex(TIMER_DB_NAME, 'name', route.params.timerName).pipe(
      map((timer: Timer) => {
        if (timer) {
          return timer;
        } else {
          this.router.navigate(['timers']);
          return null;
        }
      })
    );
  }
}
