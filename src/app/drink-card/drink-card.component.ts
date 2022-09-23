import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '../models/drink.model';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss'],
})
export class DrinkCardComponent {
  @Input() item: Drink;

  @Output() clicked = new EventEmitter();
}
