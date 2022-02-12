import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICard } from '../../core/models/cards';
import { Observable, Subject } from 'rxjs';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public cards$: Observable<Array<ICard>>;
  public filteredCards: ICard[] = [];
  public cards: ICard[];
  private error: string;
  public isSearched: Subject<boolean> = this.cardService.isSearched;

  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.getAllCards();
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
  ngOnDestroy(): void {
    this.isSearched.unsubscribe();
}
}
