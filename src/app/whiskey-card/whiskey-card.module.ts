import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { WhiskeyCardComponent } from "./whiskey-card.component";

@NgModule({
    declarations: [WhiskeyCardComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [WhiskeyCardComponent],
})
export class WhiskeyCardModule {}