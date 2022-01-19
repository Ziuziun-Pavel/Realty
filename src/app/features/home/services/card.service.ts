import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { environment } from '../../../../environments/environment';
import { ICard } from '../../../core/models/cards';
import { findCardById } from "../../../shared/utilits/findCardById";
import { sellCards } from "../../../../assets/data/sellCard";
import { rentCards } from "../../../../assets/data/rentCards";

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
      return findCardById(of(sellCards), cardId)
  }

  getRentCardById(cardId: string ): Observable<ICard | undefined> {
      return findCardById(of(rentCards), cardId)
  }

}

