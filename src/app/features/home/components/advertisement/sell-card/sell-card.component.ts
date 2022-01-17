import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import {ICard} from "../../../../../core/models/cards";
=======
import { ICard } from '../../../../../core/models/cards';
>>>>>>> 9c9e099 (extract duplicate code to new function)

@Component({
  selector: 'app-sell-card',
  templateUrl: './sell-card.component.html',
  styleUrls: ['./sell-card.component.scss']
})
export class SellCardComponent implements OnInit {
  cards: Observable<Array<ICard>>|undefined;

  constructor(private readonly cardService: CardService) { }


  ngOnInit(): void {
    this.cards = this.cardService.getSellCards()
  }

}
