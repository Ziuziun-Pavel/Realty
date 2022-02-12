import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of, Subject } from 'rxjs';
import { ICard } from '../../../core/models/cards';
import { sellCards } from '../../../../assets/data/sellCard';
import { rentCards } from '../../../../assets/data/rentCards';
import { findItemById } from '../../../shared/utilits/findItemById';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  public allCards: Observable<ICard[]>;

  public isSearched = new Subject<boolean>();

  public getAllCards(): Observable<ICard[]> {
    return of([...sellCards,...rentCards]);
  }

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

  public show(): void {
    this.isSearched.next(true);
  }

}
