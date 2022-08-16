import { Component, OnInit } from '@angular/core';
import { PAGES } from 'src/app/core/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  pages = PAGES;

  constructor() { }

  ngOnInit() {}

}
