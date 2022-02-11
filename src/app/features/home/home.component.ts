import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../core/models/cards';
import { CardService } from './services/card.service';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { RentCardsComponent } from './components/advertisement/rent-cards/rent-cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public cards$: Observable<Array<ICard>>;
  cards: ICard[];
  filteredMovies: ICard[] = [];
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
