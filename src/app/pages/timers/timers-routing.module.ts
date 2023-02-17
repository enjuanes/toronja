import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerResolver } from 'src/app/core/resolvers/timer.resolver';

import { TimersPage } from './timers.page';

const routes: Routes = [
  {
    path: '',
    component: TimersPage
  }, {
    path: ':timerName',
    component: TimersPage,
    resolve: {
      timer: TimerResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimersRoutingModule {}
