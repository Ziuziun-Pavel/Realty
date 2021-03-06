import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardType, ICard } from '../../../core/models/cards';
import { sellCards } from '../../../../assets/data/sellCard';
import { rentCards } from '../../../../assets/data/rentCards';
import { findItemById } from '../../../shared/utilits/findItemById';
import * as uniqid from 'uniqid';
import { favCards } from '../../../../assets/data/favouriteCards';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private arrayOfNewCards: ICard[] = [];

  private set: Set<string> = new Set();

  private card: ICard;

  public getAllCards(): Observable<ICard[]> {
    return of([...sellCards, ...rentCards]);
  }

  public getCardById(cardId: string): Observable<ICard | undefined> {
    return findItemById(of([...sellCards, ...rentCards]), cardId);
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

  public getAddedCards(): Observable<ICard[]> {
    return of(this.arrayOfNewCards);
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
    let editAdvert: ICard | undefined;
    let editAdvertFromAllCardsArray: ICard | undefined;

    findItemById(of(this.arrayOfNewCards), cardId)
      .subscribe(data => {
        editAdvert = data;
      });
    findItemById(this.getAllCards(), cardId)
      .subscribe(data => {
        editAdvertFromAllCardsArray = data;
      });

    this.card = {
      ...editCard,
      id: cardId,
    };

    if (editAdvert) {
      let index = this.arrayOfNewCards.indexOf(editAdvert);
      this.arrayOfNewCards.splice(index, 1);

      this.arrayOfNewCards.push(this.card);
    }

    if (editAdvertFromAllCardsArray) {
      let sellIndex = sellCards.indexOf(editAdvertFromAllCardsArray);
      let rentIndex = rentCards.indexOf(editAdvertFromAllCardsArray);

      if (this.card.type === CardType.sell) {
        sellCards.splice(sellIndex, 1);
        sellCards.push(this.card);
      } else {
        rentCards.splice(rentIndex, 1);
        rentCards.push(this.card);
      }
    }

    return of(this.card);
  }

  public deleteCard(cardId: string): ICard[] {

    let item: ICard | undefined;
    let itemFromAllCards: ICard | undefined;

    findItemById(of(this.arrayOfNewCards), cardId)
      .subscribe(data => {
        item = data;
      });
    findItemById(this.getAllCards(), cardId)
      .subscribe(data => {
        itemFromAllCards = data;
      });

    if (item) {
      let index = this.arrayOfNewCards.indexOf(item);
      this.arrayOfNewCards.splice(index, 1);
    }

    if (itemFromAllCards) {
      let sellIndex = sellCards.indexOf(itemFromAllCards);
      let rentIndex = rentCards.indexOf(itemFromAllCards);

      if (itemFromAllCards.type === CardType.sell) {
        sellCards.splice(sellIndex, 1);
      } else {
        rentCards.splice(rentIndex, 1);
      }

    }
    return this.arrayOfNewCards;
  }

  getFavouriteCards(): Observable<ICard[]> {

    this.set.forEach(id => {
      if (favCards.find(card => card.id === id)) {
        return;
      }
      findItemById(this.getAllCards(), id)
        .subscribe(card => {
          if (card) {
            favCards.push(card);
          }
        });
    });

    return of(favCards);
  }

  addFavouriteCards(card: ICard): Observable<ICard[]> {
    this.set.add(card.id);
    localStorage.setItem('set', JSON.stringify(Array.from(this.set)));
    console.log(this.set);
    return of(favCards);
  }

  deleteFavouriteCards(cardId: string): Observable<ICard[]> {
    let card: ICard | undefined;

    findItemById(this.getFavouriteCards(), cardId)
      .subscribe((deletedCard) => {
        card = deletedCard;
      });

    if (card) {
      let cardIndex = favCards.indexOf(card);
      favCards.splice(cardIndex, 1);
    }

    this.set.delete(cardId);
    localStorage.setItem('set', JSON.stringify(Array.from(this.set)));

    return of(favCards);
  }

}
