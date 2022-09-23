import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { VodkaCardComponent } from "./vodka-card.component";

@NgModule({
    declarations: [VodkaCardComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [VodkaCardComponent],
})
export class VodkaCardModule {}