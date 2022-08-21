import { Component, OnInit } from '@angular/core';
import { UtilsService } from './core/services/utils/utils.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
  RouterLink,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { FAVORITE_PAGE_KEY, PAGES } from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  firstNavigationFinished = false;

  constructor(private router: Router, private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.initializeApp();
  }

  initializeApp(): void {
    this.initializeRouterLoading();
  }

  initializeRouterLoading() {
    this.router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          if (event.url && typeof event.url === 'string' && !event.url.startsWith('/color')) {
            this.utilsService.resetThemeColor();
          }

          this.firstNavigationFinished = true;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
