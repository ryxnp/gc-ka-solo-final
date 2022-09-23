import { Injectable } from "@angular/core";
import { Rum } from "../models/rum.model";

@Injectable({
    providedIn: 'root'
})
export class RumService {
    getRums(): Rum[] {
        return [
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
        ];
    }
    getRum(id: number): Rum {
        return this.getRums().find((rum) => rum.id === id);

}
}