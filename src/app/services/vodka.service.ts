import { Injectable } from "@angular/core";
import { Vodka } from "../models/vodka.model";

@Injectable({
    providedIn: 'root'
})
export class VodkaService {
    getVodkas(): Vodka[] {
        return [
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
    getVodka(id: number): Vodka {
        return this.getVodkas().find((vodka) => vodka.id === id);

}
}