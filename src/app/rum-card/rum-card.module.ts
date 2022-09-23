import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RumCardComponent } from "./rum-card.component";

@NgModule({
    declarations: [RumCardComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [ RumCardComponent ],
})
export class RumCardModule {}