import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  public searchingForm: FormGroup;

  public dropdownName: Array<string> = ['','Кол-во комнат', 'Область', 'Цена'];

  public dropMenuOptions = {
    'type': ['Снять', 'Купить'],
    'price': ['менее 50 000$','менее 150 000$','более 150 000$'],
    'rooms': ['1-комнатную','2-комнатную','3-комнатную','4-комнатную','5-комнатную','6-комнатную'],
    'region': ['г.Минск','Минская','Гродненская','Могилёвская','Брестская','Витебская','Гомельская'],
  }

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.searchingForm = this.formBuilder.group({
      search: [''],
      dropdownControl: [''],
    })
  }
}
