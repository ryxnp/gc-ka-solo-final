import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rum } from '../models/rum.model';

@Component({
  selector: 'app-rum-card',
  templateUrl: './rum-card.component.html',
  styleUrls: ['./rum-card.component.scss'],
})
export class RumCardComponent {
  @Input() item: Rum;

  constructor() { }

  @Output() clicked = new EventEmitter();

}
