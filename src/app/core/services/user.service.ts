import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { regUsers } from '../../../assets/data/users';
import { CardType, ICard } from '../models/cards';
import * as uniqid from 'uniqid';
import { sellCards } from '../../../assets/data/sellCard';
import { rentCards } from '../../../assets/data/rentCards';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private arrayOfNewCards: ICard[] = [];

  private card: ICard;

  public getLoggedUser(): Observable<IUser> {
    return of(JSON.parse(localStorage.getItem('logUser') || '{}'));
  }

  public getUsers(): Observable<IUser[]> {
    return of(regUsers);
  }

  public getAddedCards(): Observable<ICard[]> {
    return of(this.arrayOfNewCards);
  }

  public updateUser(newUser: IUser): Observable<IUser> {
    let user = JSON.parse(localStorage.getItem('logUser') || '{}');

    user = {
      userName: newUser.userName,
      userSurname: newUser.userSurname,
      userEmail: newUser.userEmail,
      password: newUser.password,
      id: user.id,
    };

    localStorage.setItem('logUser', JSON.stringify(user));
    return of(user);
  }

  public addNewCard(card: ICard): Observable<ICard[]> {
    card.id = uniqid();

    if (card.type === CardType.sell) {
      sellCards.push(card);
    } else {
      rentCards.push(card);
    }
    this.arrayOfNewCards.push(card);
    return of(this.arrayOfNewCards);
  }

  public editAdvert(editCard: ICard, cardId: string): Observable<ICard> {
    let editAdvert = this.findElemById(this.arrayOfNewCards, cardId);
    let editAdvertFromAllCardsArray = this.findElemById([...sellCards, ...rentCards], cardId);

    if (editAdvert) {
      let index = this.arrayOfNewCards.indexOf(editAdvert);
      this.arrayOfNewCards.splice(index, 1);
    }

    this.card = {
      ...editCard,
      id: cardId,
    };
    this.arrayOfNewCards.push(this.card);

    if (editAdvertFromAllCardsArray) {
      let globalIndex = [...sellCards, ...rentCards].indexOf(editAdvertFromAllCardsArray);

      if (this.card.type === CardType.sell ) {
        sellCards.splice(globalIndex, 1);
        sellCards.push(this.card);
      } else {
        rentCards.splice(globalIndex, 1);
        rentCards.push(this.card);
      }
    }

    return of(this.card);
  }

  public deleteCard(cardId: string): ICard[] {
    let item = this.findElemById(this.arrayOfNewCards, cardId);
    let items = this.findElemById([...sellCards, ...rentCards], cardId);

    if (item && items) {
      let index = this.arrayOfNewCards.indexOf(item);
      let globalIndex = [...sellCards, ...rentCards].indexOf(items);

      this.arrayOfNewCards.splice(index, 1);

      if (items.type === CardType.sell) {
        sellCards.splice(globalIndex, 1);
      } else {
        rentCards.splice(globalIndex, 1);
      }
    }
    return this.arrayOfNewCards;
  }

  private findElemById(array: ICard[], cardId: string): ICard | undefined {
    return array.find(el => el.id === cardId);
  }

}




