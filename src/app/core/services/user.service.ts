import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { regUsers } from '../../../assets/data/users';
import { ICard } from '../models/cards';
import * as uniqid from 'uniqid';
import { findItemById } from '../../shared/utilits/findItemById';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private arrayOfNewCards: ICard[] = [];
  public cardsFromLocalStorage: ICard[] = [];

  public getLoggedUser(): Observable<IUser> {
    return of(JSON.parse(localStorage.getItem('logUser') || '{}'));
  }

  public getUsers(): Observable<IUser[]> {
    return of(regUsers);
  }

  public keepChanges(newUser: any): Observable<IUser> {
    let user = JSON.parse(localStorage.getItem('logUser') || '{}');

    for (let propName in user) {
      if (propName === 'id') {
        continue;
      }
      user[propName] = newUser[propName];
    }
    localStorage.setItem('logUser', JSON.stringify(user));
    return of(user);
  }

  public addNewCard(card: ICard): Observable<ICard[]> {
    card.id = uniqid();
    this.arrayOfNewCards.push(card);
    this.arrayOfNewCards.forEach((item) => {
      localStorage.setItem(`newCard${localStorage.length}`, JSON.stringify(item));
    });
    return of(this.arrayOfNewCards);
  }

  public AddCards(): void {
    for (let i = 0; i < localStorage.length - 1; i++) {
        this.cardsFromLocalStorage.push(JSON.parse(localStorage.getItem(`newCard${i + 1}`) || '{}'));
    }
  }

  public getAddedCards(): Observable<ICard[]> {
    return of(this.cardsFromLocalStorage);
  }

  public getAddedCardById(cardId: string): Observable<ICard | undefined> {
    return findItemById(of(this.cardsFromLocalStorage), cardId);
  }

}




