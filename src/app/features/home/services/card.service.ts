import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ICard } from '../../../core/models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {
  }

  getSellCards(): Observable<Array<ICard>> {
    return this.http.get(environment.baseUrl + 'sellCards.json') as Observable<Array<ICard>>
  }

  getRentCards(): Observable<Array<ICard>> {
    return this.http.get(environment.baseUrl + 'rentCards.json') as Observable<Array<ICard>>
  }

  getSellCardById(cardId: string | undefined): Observable<ICard | undefined> {
      return this.findCardById(this.http.get<ICard[]>(environment.baseUrl + 'sellCards.json'), cardId)
  }

  getRentCardById(cardId: string | undefined): Observable<ICard | undefined> {
      return this.findCardById(this.http.get<ICard[]>(environment.baseUrl + 'rentCards.json'), cardId)
  }

  findCardById(stream: Observable<ICard[]>, cardId: string | undefined): Observable<ICard | undefined> {
     return stream.pipe(map(data => data.find(({id}) => cardId === id)))
  }

}

