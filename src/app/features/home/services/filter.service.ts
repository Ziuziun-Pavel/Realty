import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { map, Observable } from 'rxjs';
import { ICard } from '../../../core/models/cards';

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
