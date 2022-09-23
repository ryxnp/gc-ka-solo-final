import { Injectable } from "@angular/core";
import { Drink } from "../models/drink.model";

@Injectable({
    providedIn: 'root'
})
export class DrinkService {
    getDrinks(): Drink[] {
     return [
        {   
            id: 0, 
            name:'Los Angeles Hoodie', 
            price: 650, 
            image: 'assets/images/img1.png', 
            description: 'A Plain looking hoodie with Los Angeles Signature',
        },
        {   
            id: 1, 
            name:"Black Custom Sleeves Sweater", 
            price: 650, 
            image: 'assets/images/img2.png', 
            description: 'Simplicity at its finest'
        },
        { 
            id: 2, 
            name:'Pink Graphic Hoodie', 
            price: 550, 
            image:'assets/images/img3.png', 
            description: "A Rose inspired graphic hoodie design made for Kakampinks" 
        },
        { 
            id: 3, 
            name:'Beige Graphic Sweater', 
            price: 650, 
            image:'assets/images/img4.png', 
            description: "If you like chaotic moments, this is for you"
        },
        { 
            id: 4, 
            name:'Navy Blue Graphic Hoodie', 
            price: 650, 
            image:'assets/images/img5.png', 
            description: "Don't trip over what's behind you"
        },
        { 
            id: 5, 
            name:'NASA Hoodie', 
            price: 550, 
            image:'assets/images/img6.png', 
            description: "A NASA Inspired Hoodie"
        },
        {   
            id: 6, 
            name:'Cargo Shorts', 
            price: 650, 
            image: 'assets/images/img7.png', 
            description: 'If you are a man who likes pockets, this is for you',
        },
        {   
            id: 7, 
            name:"Drawstring shorts", 
            price: 650, 
            image: 'assets/images/img8.png', 
            description: 'A simple shorts for this hot weather'
        },
        { 
            id: 8, 
            name:'Tecwear Pants', 
            price: 550, 
            image:'assets/images/img9.png', 
            description: "A Fitted full of pockets pants" 
        },
        { 
            id: 9, 
            name:'Stripped Casual Pants', 
            price: 650, 
            image:'assets/images/img10.png', 
            description: "If you are feeling classy, this is for you"
        },
        { 
            id: 10, 
            name:'Black Drawstring Pants', 
            price: 650, 
            image:'assets/images/img11.png', 
            description: "Black is the simplest form of look"
        },
        { 
            id: 11, 
            name:'Beige Casual Shorts', 
            price: 550, 
            image:'assets/images/img12.png', 
            description: "A casual shorts for a casual day"
        },
        {   
            id: 12, 
            name:'Gray Sweatpants', 
            price: 650, 
            image: 'assets/images/img13.png', 
            description: 'Pants for your casual walk/jog',
        },
        {   
            id: 13, 
            name:"Mint Green Sweatpants", 
            price: 650, 
            image: 'assets/images/img14.png', 
            description: 'A pants for your exercise'
        },
        { 
            id: 14, 
            name:'Brown Casual Pants', 
            price: 550, 
            image:'assets/images/img15.png', 
            description: "A pants for your walk" 
        },
        { 
            id: 15, 
            name:'Dark Brown Baggy Pants', 
            price: 650, 
            image:'assets/images/img16.png', 
            description: "If you are feeling classy, this is for you"
        },
        { 
            id: 16, 
            name:'Gray Baggy Pants', 
            price: 650, 
            image:'assets/images/img17.png', 
            description: "Comfy looking pants"
        },
        { 
            id: 17, 
            name:'Beige Casual Pants', 
            price: 550, 
            image:'assets/images/img18.png', 
            description: "A casual pants for a casual day"
        },
    ];
    }

    getDrink(id: number): Drink {
        return this.getDrinks().find((drink) => drink.id === id);
    }

}

