import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ICard } from '../../../../core/models/cards';
import { CardService } from '../../services/card.service';
import { dropdownNames } from '../../../../../assets/data/dropdownStates';
import {
  CustomDropdownComponent
} from '../../../../shared/components/custom-dropdown/custom-dropdown.component';
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
      dropdownType: [''],
      dropdownPrice: [''],
      dropdownRooms: [''],
      dropdownRegion: [''],

    });
    this.formControlsSetInitialValues();
  }

  public get formControls(): { [key: string]: AbstractControl; } {
    return this.searchingForm.controls;
  }

  public formControlsSetInitialValues() {
    this.formControls.dropdownType.setValue(this.dropdownNames.type[0]);
    this.formControls.dropdownPrice.setValue(this.dropdownNames.price[0]);
    this.formControls.dropdownRooms.setValue(this.dropdownNames.rooms[0]);
    this.formControls.dropdownRegion.setValue(this.dropdownNames.region[0]);
  }

  public filterByType(cards: ICard[]) {
    cards.filter(card => {
      if (this.formControls.dropdownType.value.value !== '') {
        return card.type === this.formControls.dropdownType.value.value;
      } else {
        return card;
      }
    })
  }

  public filterByPrice(cards: ICard[]) {
    cards.filter(card => {
      if (this.formControls.dropdownPrice.value.value !== '') {
        return card.price <= +this.formControls.dropdownPrice.value.value;
      } else {
        return card;
      }
    })
  }

  public filterByRooms(cards: ICard[]) {
    cards      .filter(card => {
      if (this.formControls.dropdownRooms.value.value !== '') {
        return card.numberOfRooms === +this.formControls.dropdownRooms.value.value;
      } else {
        return card;
      }
    })
  }

  public filterByRegion(cards: ICard[]) {
    cards.filter(card => {
      if (this.formControls.dropdownRegion.value.value !== '') {
        return card.region === this.formControls.dropdownRegion.value.value;
      } else {
        return card;
      }
    })
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

    this.filteredCards = this.cards
      .filter(card => {
        if (this.formControls.dropdownType.value.value !== '') {
          return card.type === this.formControls.dropdownType.value.value;
        } else {
          return card;
        }
      })
      .filter(card => {
        if (this.formControls.dropdownPrice.value.value !== '') {
          return card.price <= +this.formControls.dropdownPrice.value.value;
        } else {
          return card;
        }
      })
      .filter(card => {
        if (this.formControls.dropdownRooms.value.value !== '') {
          return card.numberOfRooms === +this.formControls.dropdownRooms.value.value;
        } else {
          return card;
        }
      })
      .filter(card => {
        if (this.formControls.dropdownRegion.value.value !== '') {
          return card.region === this.formControls.dropdownRegion.value.value;
        } else {
          return card;
        }
      })
      .filter((card) => card.street.toLowerCase()
        .includes(query));

    this.filtered.emit(this.filteredCards);
  }

  public onReset(): void {
    this.searchingForm.reset();
    this.formControlsSetInitialValues();
    this.filteredCards.splice(0);
    this.cardService.hide();
  }
}
