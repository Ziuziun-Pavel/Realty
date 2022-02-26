import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICard } from '../../../core/models/cards';

@Injectable({
  providedIn: 'root',
})
export class MockCardService {

  public getAllCards(): Observable<ICard[]> {
    return of([]);
  }

  public getCardById(){
    return of({});
  }

  public getSellCards(): Observable<Array<ICard>> {
    return of([]);
  }

  public getRentCards(): Observable<Array<ICard>> {
    return of([]);
  }

  public getSellCardById() {
    return of({});
  }

  public getRentCardById() {
    return of({});
  }

  public getAddedCards(): Observable<ICard[]> {
    return of([]);
  }


  public addNewCard(): Observable<ICard[]> {
    return of([]);
  }

  public editAdvert() {

    return of({});
  }

  public deleteCard(): ICard[] {

    return [];
  }


}
