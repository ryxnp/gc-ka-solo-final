import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { SearchBarModule } from 'src/app/searchbar/searchbar.module';
import { CategoryItemModule } from 'src/app/category-item/category-item.module';
import { DrinkCardModule } from 'src/app/drink-card/drink-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchBarModule,
    CategoryItemModule,
    DrinkCardModule,
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
