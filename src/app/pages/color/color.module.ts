import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ColorRoutingModule } from './color-routing.module';
import { ColorPage } from './color.page';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    IonicModule,
    ColorRoutingModule
  ],
  declarations: [ColorPage, ColorPickerComponent]
})
export class ColorModule {}
