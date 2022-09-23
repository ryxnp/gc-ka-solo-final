import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiskeyPageRoutingModule } from './whiskey-routing.module';

import { WhiskeyPage } from './whiskey.page';
import { SearchBarModule } from 'src/app/searchbar/searchbar.module';
import { WhiskeyCardModule } from 'src/app/whiskey-card/whiskey-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiskeyPageRoutingModule,
    SearchBarModule,
    WhiskeyCardModule,
  ],
  declarations: [WhiskeyPage]
})
export class WhiskeyPageModule {}
