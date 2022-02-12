import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ICard } from '../../../../core/models/cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  public searchingForm: FormGroup;
  @Input() cards: ICard[];
  @Output('filtered') filtered: EventEmitter<ICard[]> = new EventEmitter<
    ICard[]
    >();
  filteredCards: ICard[];

  public dropdownName: Array<string> = ['','Кол-во комнат', 'Область', 'Цена'];

  public dropMenuOptions = {
    'type': ['Снять', 'Купить'],
    'price': ['менее 50 000$','менее 150 000$','более 150 000$'],
    'rooms': ['1-комнатную','2-комнатную','3-комнатную','4-комнатную','5-комнатную','6-комнатную'],
    'region': ['г.Минск','Минская','Гродненская','Могилёвская','Брестская','Витебская','Гомельская'],
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {  }

  ngOnInit() {

    this.searchingForm = this.formBuilder.group({
      search: [''],
      dropdownControl: [''],
    })
  }

  public get formControls(): { [key: string]: AbstractControl; } {
    return this.searchingForm.controls;
  }

  filter() {
    let query = this.formControls.search.value.toLowerCase().trim();
    this.filteredCards = this.cards.filter((card) =>
      card.street.toLowerCase().includes(query)
    );
    this.filtered.emit(this.filteredCards);
  }
}
