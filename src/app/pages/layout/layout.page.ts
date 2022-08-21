import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FAVORITE_PAGE_KEY, PAGES } from 'src/app/core/constants';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.page.html',
  styleUrls: ['layout.page.scss'],
})
export class LayoutPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const favoritePage = PAGES.find((page) => page.code === localStorage.getItem(FAVORITE_PAGE_KEY));

    if (favoritePage) {
      this.router.navigate([favoritePage.code]);
    }
  }

}
