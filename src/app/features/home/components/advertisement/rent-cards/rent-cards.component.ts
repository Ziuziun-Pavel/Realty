import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../../services/card.service';
import { ICard } from '../../../../../core/models/cards';
import { SearchPanelComponent } from '../../search-panel/search-panel.component';

@Component({
  selector: 'app-rent-cards',
  templateUrl: './rent-cards.component.html',
  styleUrls: ['./rent-cards.component.scss'],
})
export class RentCardsComponent implements OnInit {
  public cards$: Observable<Array<ICard>>;
  cards: ICard[];
  @Input()filteredMovies: ICard[] ;
  error: string;
  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.getRentCards();


    this.cards$.subscribe(
      (cards) => {
        this.cards = cards;
        this.filteredMovies = cards;
      },
      (error) => {
        this.error = error;
      }
    );
  }


}
