import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Whisk } from '../models/whisk.model';

@Component({
  selector: 'app-whiskey-card',
  templateUrl: './whiskey-card.component.html',
  styleUrls: ['./whiskey-card.component.scss'],
})
export class WhiskeyCardComponent{
  @Input() item: Whisk;
  constructor() { }

  @Output() clicked = new EventEmitter();

}
