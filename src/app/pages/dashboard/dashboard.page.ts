import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FAVORITE_PAGE_KEY, PAGES } from 'src/app/core/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  pages = PAGES;

  favoritePage: typeof PAGES[number];

  constructor(private menuController: MenuController, private router: Router) { }

  ngOnInit() {
    this.favoritePage = PAGES.find((page) => page.code === localStorage.getItem(FAVORITE_PAGE_KEY));
  }

  setFavoritePage(page: typeof PAGES[number]) {
    if (this.favoritePage.code === page.code) {
      this.favoritePage = null;
      localStorage.removeItem(FAVORITE_PAGE_KEY);
    } else {
      this.favoritePage = page;
      localStorage.setItem(FAVORITE_PAGE_KEY, page.code);
    }
  }

  openMenu() {
    this.menuController.open('appMenu');
  }
}
