import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICard } from '../../core/models/cards';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CardService } from './services/card.service';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() public cards$: Observable<Array<ICard>>;

  private ngUnsubscribe: Subject<boolean> = new Subject();

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

    this.cards$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (cards) => {
          this.cards = cards;
          this.filteredCards = cards;
        },
        (error) => {
          this.error = error;
        },
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
