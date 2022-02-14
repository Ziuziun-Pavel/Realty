import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ICard } from '../../../../core/models/cards';
import { CardService } from '../../services/card.service';
import { SelectedOption } from '../../../../core/models/selectedOption';
import { FilterService } from '../../services/filter.service';
import { dropdownNames } from '../../../../../assets/data/dropdownStates';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Input() public cards: ICard[];

  @Output('filtered') public filtered: EventEmitter<ICard[]> = new EventEmitter<ICard[]>();

  public searchingForm: FormGroup;

  public isSearched = false;

  public filteredCards: ICard[];

  public filteredCards$: Observable<ICard[]>;

  public dropdownNames: Array<Array<SelectedOption>> = dropdownNames;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cardService: CardService,
  ) {
  }

  ngOnInit() {

    this.searchingForm = this.formBuilder.group({
      search: [''],
      dropdownControl: [''],
    });
  }

  public get formControls(): { [key: string]: AbstractControl; } {
    return this.searchingForm.controls;
  }

  public onSearch(): void {
    this.cardService.show();
    let query = this.formControls.search.value.toLowerCase()
      .trim();

    this.filteredCards = this.cards.filter((card) =>
      card.street.toLowerCase()
        .includes(query)
    );
    this.filteredCards$ = of(this.filteredCards);
    console.log(this.filteredCards);
    this.filtered.emit(this.filteredCards);
  }

  public onReset(): void {
    this.searchingForm.reset();
    if (this.filteredCards.length >= 1) {
      this.filteredCards.splice(0);
    }
    this.cardService.hide();
  }
}
