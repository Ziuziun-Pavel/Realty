import { Injectable } from '@angular/core';
import { ICard } from '../../../core/models/cards';
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FilterService {
  public isSearched = new Subject<boolean>();

  public filterCards(cards: ICard[], forms: { [key: string]: AbstractControl }): ICard[] {
    let query: string;

    if (forms.search.value) {
      query = forms.search.value.toLowerCase().trim();
    } else {
      query = '';
    }

    return cards
      .filter(card => {
        return forms.dropdownType.value.value ? card.type === forms.dropdownType.value.value : card;
      })
      .filter(card => {
        return forms.dropdownPrice.value.value ? card.price <= +forms.dropdownPrice.value.value : card;
      })
      .filter(card => {
        return forms.dropdownRooms.value.value ? card.numberOfRooms === +forms.dropdownRooms.value.value : card;
      })
      .filter(card => {
        return forms.dropdownRegion.value.value ? card.region === forms.dropdownRegion.value.value : card;
      })
      .filter((card) => card.street.toLowerCase()
        .includes(query));
  }

  public show(): void {
    this.isSearched.next(true);
  }

  public hide(): void {
    this.isSearched.next(false);
  }
}
