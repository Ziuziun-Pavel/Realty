import { Injectable, ViewChild } from '@angular/core';
import { CardService } from './card.service';
import { filter, map, Observable } from 'rxjs';
import { ICard } from '../../../core/models/cards';
import { SelectedOption } from '../../../core/models/selectedOption';
import {
  CustomDropdownComponent
} from '../../../shared/components/custom-dropdown/custom-dropdown.component';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  public allCards: Observable<ICard[]>;

  constructor(private readonly cardService: CardService) { }

  public filterOptions(selectedOption: string): Observable<ICard[]>{
    return this.cardService.getAllCards().pipe(
      map(items => {
        return items.filter(item => item.type === selectedOption)
      })
    )
  }
}
