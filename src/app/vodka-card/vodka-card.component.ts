import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vodka } from '../models/vodka.model';

@Component({
  selector: 'app-vodka-card',
  templateUrl: './vodka-card.component.html',
  styleUrls: ['./vodka-card.component.scss'],
})
export class VodkaCardComponent {
  @Input() item: Vodka;

  @Output() clicked = new EventEmitter();

}
