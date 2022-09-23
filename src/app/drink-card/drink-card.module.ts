import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { DrinkCardComponent } from "./drink-card.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [DrinkCardComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [DrinkCardComponent],
})
export class DrinkCardModule {}