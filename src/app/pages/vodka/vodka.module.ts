import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VodkaPageRoutingModule } from './vodka-routing.module';

import { VodkaPage } from './vodka.page';
import { SearchBarModule } from 'src/app/searchbar/searchbar.module';
import { VodkaCardModule } from 'src/app/vodka-card/vodka-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VodkaPageRoutingModule,
    SearchBarModule,
    VodkaCardModule,
  ],
  declarations: [VodkaPage]
})
export class VodkaPageModule {}
