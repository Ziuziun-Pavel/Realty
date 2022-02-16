import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../../core/models/cards';
import { Observable, Subject } from 'rxjs';
import { CardService } from './services/card.service';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() public cards$: Observable<Array<ICard>>;

  public isSearched: Subject<boolean> = this.filterService.isSearched;

  public filteredCards: ICard[] = [];

  public cards: ICard[];

  private error: string;

  constructor(
    private readonly filterService: FilterService,
    private readonly cardService: CardService,
  ) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.getAllCards();
    this.cards$.subscribe(
      (cards) => {
        this.cards = cards;
        this.filteredCards = cards;
      },
      (error) => {
        this.error = error;
      },
    );
  }
}
