import { Component } from '@angular/core';
import { UtilsService } from './core/services/utils/utils.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private utilsService: UtilsService) {
    this.initializeApp();
  }

  initializeApp(): void {
    this.initializeRouterLoading();
  }

  private initializeRouterLoading() {
    this.router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          if (event.url && typeof event.url === 'string' && !event.url.startsWith('/color')) {
            this.utilsService.resetThemeColor();
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
