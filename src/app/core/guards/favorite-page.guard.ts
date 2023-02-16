import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FAVORITE_PAGE_KEY, PAGES } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class FavoritePageGuard implements CanActivate {

  firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.firstNavigation && state.url === '/') {
      const favoritePage = PAGES.find((page) => page.code === localStorage.getItem(FAVORITE_PAGE_KEY));

      if (favoritePage) {
        this.router.navigate([favoritePage.code]);
        this.firstNavigation = false;
        return false;
      }
    }

    this.firstNavigation = false;
    return true;
  }

}
