import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ICard } from '../../core/models/cards';
import { Observable, Subject } from 'rxjs';
import { CardService } from './services/card.service';
import {
  CustomDropdownComponent
} from '../../shared/components/custom-dropdown/custom-dropdown.component';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isSearched: Subject<boolean> = this.cardService.isSearched;

  @Input()public cards$: Observable<Array<ICard>>;
  @ViewChild(CustomDropdownComponent) custom: CustomDropdownComponent;

  public filteredCards: ICard[] = [];

  public cards: ICard[];

  private error: string;

  constructor(
    private readonly cardService: CardService,
    private readonly filterService: FilterService,
  ) { }

  ngOnInit(): void {
    // this.cards$ = this.custom.getFilteredArray();
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
}
