import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../../../core/models/cards';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  public cards$: Observable<Array<ICard>>;
  filteredCards: ICard[] = [];
  cards: ICard[];
  error: string;
  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.getRentCards();
    this.cards$.subscribe(
      (cards) => {
        this.cards = cards;
        this.filteredCards = cards;
      },
      (error) => {
        this.error = error;
      }
    );
  }

}
