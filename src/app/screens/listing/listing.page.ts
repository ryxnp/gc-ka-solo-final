import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item.module';
import { Category } from 'src/app/models/category.model';
import { Drink } from 'src/app/models/drink.model';
import { CartService } from 'src/app/services/cart.service';
import { DrinkService } from 'src/app/services/drink.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  drinks: Drink[] = [];


  constructor(private drinkService: DrinkService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.drinks = this.drinkService.getDrinks();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: "All",
        image: "assets/icon/all.png",
        active: true,
      },
      {
        id: 2,
        label: "Whiskey",
        image: "assets/icon/whiskey.png",
        active: false,
      },
      {
        id: 3,
        label: "Rum",
        image: "assets/icon/rum.png",
        active: false,
      },
      {
        id: 4,
        label: "Vodka",
        image: "assets/icon/vodka.png",
        active: false,
      },
    ];
  }
  
  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
  
}


