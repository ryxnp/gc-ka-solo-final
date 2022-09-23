import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.module';
import { Drink } from 'src/app/models/drink.model';
import { CartService } from 'src/app/services/cart.service';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  drink: Drink;
  
  constructor(private activatedRoute: ActivatedRoute, private drinkService: DrinkService, private cartService: CartService, private toastCtrl: ToastController) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.drink = this.drinkService.getDrink(this.id);
  }

  addItemToCart() {
    const cartitem: CartItem = {
      id: this.drink.id,
      name: this.drink.name,
      price: this.drink.price,
      image: this.drink.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }

    async presentToast() {
      const toast = await this.toastCtrl.create({
        message: "Item added to cart",
        mode: 'ios',
        duration: 1000,
        position: "top",
      });

      toast.present();
    }
}
