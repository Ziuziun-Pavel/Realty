import { Component, Input } from '@angular/core';
import { ICard } from '../../../../core/models/cards';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  @Input()filteredCards: ICard[] = [];
}
