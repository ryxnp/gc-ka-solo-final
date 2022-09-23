import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemModule } from '../cart-item/cart-item.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartItemModule,
    ButtonModule,
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
