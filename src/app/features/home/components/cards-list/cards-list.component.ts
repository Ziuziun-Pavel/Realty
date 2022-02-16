import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CardType, ICard } from '../../../../core/models/cards';
import {
  CustomDropdownComponent
} from '../../../../shared/components/custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
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
