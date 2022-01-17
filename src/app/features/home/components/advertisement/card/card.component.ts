import { Component } from '@angular/core';
<<<<<<< HEAD
import { Input } from "@angular/core";
import {ICard} from "../../../../../core/models/cards";
=======
import { Input } from '@angular/core';
import { ICard } from '../../../../../core/models/cards';
>>>>>>> 9c9e099 (extract duplicate code to new function)

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()  card?: ICard;

  constructor() {

  }

}
