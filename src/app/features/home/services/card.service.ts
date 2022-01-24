import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { ICard } from '../../../core/models/cards';
import { findItemById } from '../../../shared/utilits/findItemById';
import { sellCards } from '../../../../assets/data/sellCard';
import { rentCards } from '../../../../assets/data/rentCards';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  getSellCards(): Observable<Array<ICard>> {
    return of(sellCards);
  }

  getRentCards(): Observable<Array<ICard>> {
    return of(rentCards);
  }

  getSellCardById(cardId: string ): Observable<ICard | undefined> {
      return findItemById(of(sellCards), cardId)
  }

  getRentCardById(cardId: string ): Observable<ICard | undefined> {
      return findItemById(of(rentCards), cardId)
  }

}

