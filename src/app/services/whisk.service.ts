import { Injectable } from "@angular/core";
import { Whisk } from "../models/whisk.model";

@Injectable({
    providedIn: 'root'
})
export class WhiskService {
    getWhisks(): Whisk[] {
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
    ];
    }
    getWhisk(id: number): Whisk {
        return this.getWhisks().find((whisk) => whisk.id === id);

}
}