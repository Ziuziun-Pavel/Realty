import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { regUsers } from '../../../assets/data/users';
import { CardType, ICard } from '../models/cards';
import * as uniqid from 'uniqid';
import { findItemById } from '../../shared/utilits/findItemById';
import { sellCards } from '../../../assets/data/sellCard';
import { rentCards } from '../../../assets/data/rentCards';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  public getLoggedUser(): Observable<IUser> {
    return of(JSON.parse(localStorage.getItem('logUser') || '{}'));
  }

  public getUsers(): Observable<IUser[]> {
    return of(regUsers);
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
    if(card.type === CardType.sell) {
      sellCards.push(card);
    } else {
      rentCards.push(card)
    }
    this.arrayOfNewCards.push(card);
    return of(this.arrayOfNewCards);
  }

  public getAddedCards(): Observable<ICard[]> {
    return of(this.arrayOfNewCards);
  }

}




