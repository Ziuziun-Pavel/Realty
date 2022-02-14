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
    if (this.formControls.search.value === null) {
      query = '';
    } else {
      query = this.formControls.search.value.toLowerCase()
        .trim();
    }

    // if(this.dropdownNames.type === this.custom.options) {
    //   console.log('type');
    //   console.log(this.dropdownNames.type);
    //   console.log(this.custom.options);
    //   this.filteredCards = this.cards
    //     .filter((card) =>
    //       card.street.toLowerCase()
    //         .includes(query)).filter(card => card.type === this.custom.selectedOption.value);
    // }
    // if(this.dropdownNames.type || this.dropdownNames.price == this.custom.options) {
    //   console.log('price');
    //   console.log(this.custom.selectedOption.value);
    //   this.filteredCards = this.cards
    //     .filter((card) =>
    //       card.street.toLowerCase()
    //         .includes(query))
    //     .filter(card => card.type === this.custom.selectedOption.value)
    //     .filter(card => card.price < +this.custom.selectedOption.value);
    // }
    // if(this.dropdownNames.region === this.custom.options) {
    //   console.log('region');
    //   this.filteredCards = this.cards
    //     .filter((card) =>
    //       card.street.toLowerCase()
    //         .includes(query)).filter(card => card.region === this.custom.selectedOption.value);
    // } else {
    //   console.log('111111');
    // }
    // if(this.dropdownNames.rooms === this.custom.options) {
    //   console.log('rooms');
    //   this.filteredCards = this.cards
    //     .filter((card) =>
    //       card.street.toLowerCase()
    //         .includes(query)).filter(card => card.numberOfRooms = +this.custom.selectedOption.value);
    // }

    this.filteredCards = this.cards
      .filter((card) =>
        card.street.toLowerCase()
          .includes(query))
      .filter(card => {
        if (this.custom.selectedOption !== this.custom.options[0]) {
          return card.type === this.custom.selectedOption.value;
        } else {
          return card;
        }
      })
      // .filter(card => {
      //   if (this.custom.selectedOption !== this.custom.options[0]) {
      //     console.log('a');
      //     console.log(this.custom.options[0]);
      //     return card.price <= +this.custom.selectedOption.value;
      //   } else {
      //     console.log('b');
      //     return card;
      //   }
      // })
    // .filter(card => card.price <= +this.custom.selectedOption.value)
    // .filter(card => card.numberOfRooms = +this.custom.selectedOption.value)
    // .filter(card => card.region = this.custom.selectedOption.value)

    this.filtered.emit(this.filteredCards);
  }

  public onReset(): void {
    this.searchingForm.reset();
    this.filteredCards.splice(0);
    this.cardService.hide();
  }
}
