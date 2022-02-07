import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICard } from '../../../core/models/cards';
import { sellCards } from '../../../../assets/data/sellCard';
import { rentCards } from '../../../../assets/data/rentCards';
import { findItemById } from '../../../shared/utilits/findItemById';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  public getSellCards(): Observable<Array<ICard>> {
    return of(sellCards);
  }

  public getRentCards(): Observable<Array<ICard>> {
    return of(rentCards);
  }

  public getSellCardById(cardId: string): Observable<ICard | undefined> {
    return findItemById(of(sellCards), cardId);
  }

  public getRentCardById(cardId: string): Observable<ICard | undefined> {
    return findItemById(of(rentCards), cardId);
  }

}
