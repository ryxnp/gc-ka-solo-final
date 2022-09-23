import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RumPageRoutingModule } from './rum-routing.module';

import { RumPage } from './rum.page';
import { SearchBarModule } from 'src/app/searchbar/searchbar.module';
import { RumCardModule } from 'src/app/rum-card/rum-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RumPageRoutingModule,
    SearchBarModule,
    RumCardModule,
  ],
  declarations: [RumPage]
})
export class RumPageModule {}
