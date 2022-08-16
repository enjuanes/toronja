import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PAGES } from 'src/app/core/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  pages = PAGES;

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.open('appMenu');
  }

}
