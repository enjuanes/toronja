import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPage } from './layout.page';
import { IonicModule } from '@ionic/angular';
import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    LayoutPage,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
