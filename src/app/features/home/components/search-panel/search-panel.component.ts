import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { CardType, ICard } from '../../../../core/models/cards';
import { CardService } from '../../services/card.service';
import { SelectedOption } from '../../../../core/models/selectedOption';

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
    this.filtered.emit(this.filteredCards);
  }

  public onReset(): void {
    this.searchingForm.reset();
    this.cardService.hide();
  }
}
