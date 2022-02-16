import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ICard } from '../../../../core/models/cards';
import { CardService } from '../../services/card.service';
import { dropdownNames } from '../../../../../assets/data/dropdownStates';
import { DropDownNames } from '../../../../core/models/dropDownNames';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  @Input() public cards: ICard[];

  @Output() public filtered: EventEmitter<ICard[]> = new EventEmitter<ICard[]>();

  public searchingForm: FormGroup;

  public filteredCards: ICard[];

  public dropdownNames: DropDownNames = dropdownNames;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cardService: CardService,
    private readonly filterService: FilterService,
  ) { }

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

  public get formControls(): { [key: string]: AbstractControl } {
    return this.searchingForm.controls;
  }

  private formControlsSetInitialValues(): void {
    this.formControls.dropdownType.setValue(this.dropdownNames.type[0]);
    this.formControls.dropdownPrice.setValue(this.dropdownNames.price[0]);
    this.formControls.dropdownRooms.setValue(this.dropdownNames.rooms[0]);
    this.formControls.dropdownRegion.setValue(this.dropdownNames.region[0]);
  }

  public onSearch(): void {
    this.filterService.show();
    this.filteredCards = this.filterService.filterCards(this.cards, this.formControls);
    this.filtered.emit(this.filteredCards);
  }

  public onReset(): void {
    this.searchingForm.reset();
    this.formControlsSetInitialValues();
    this.filteredCards.splice(0);
    this.filterService.hide();
  }
}
