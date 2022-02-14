import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { CardType, ICard } from '../../../../core/models/cards';
import { CardService } from '../../services/card.service';
import { SelectedOption } from '../../../../core/models/selectedOption';
import { dropdownNames } from '../../../../../assets/data/dropdownStates';
import { Observable } from 'rxjs';
import {
  CustomDropdownComponent
} from '../../../../shared/components/custom-dropdown/custom-dropdown.component';
import { CardsListComponent } from '../cards-list/cards-list.component';
import { DropDownNames } from '../../../../core/models/dropDownNames';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Input() public cards: ICard[];

  @Output('filtered') public filtered: EventEmitter<ICard[]> = new EventEmitter<ICard[]>();

  @ViewChild(CustomDropdownComponent) custom: CustomDropdownComponent;
  @ViewChild(CardsListComponent) cardlist: CardsListComponent;

  public searchingForm: FormGroup;

  public isSearched = false;

  public filteredCards: ICard[];

  public filteredCards$: Observable<ICard[]>;

  public dropdownNames: DropDownNames = dropdownNames;

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
    let query: string;
    if(this.formControls.search.value === null) {
      query = '';
    } else {
      query = this.formControls.search.value.toLowerCase()
        .trim();
    }

    this.filteredCards = this.cards
      .filter((card) =>
        card.street.toLowerCase()
          .includes(query))
      .filter(card =>
        card.type === this.custom.selectedOption.value
      )

    this.filtered.emit(this.filteredCards);
  }

  // public findOption(option: DropDownNames) {
  //   if (option.type === this.custom.selectedOption )
  // }

  public onReset(): void {
    this.searchingForm.reset();
    this.filteredCards.splice(0);
    this.cardService.hide();
  }
}
