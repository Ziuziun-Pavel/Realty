import { Component, Input, OnInit } from '@angular/core';
import { CardType, ICard } from '../../../../core/models/cards';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  @Input()filteredCards: ICard[] = [];

  public rentCards: ICard[] = [];

  public sellCards: ICard[] = [];

  ngOnInit() {
    this.rentCards = this.filteredCards.filter(item => item.type === CardType.rent);
    this.sellCards = this.filteredCards.filter(item => item.type === CardType.sell);
  }
}
