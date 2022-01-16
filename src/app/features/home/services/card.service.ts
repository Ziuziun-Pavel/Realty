import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";
import { ICard } from "../../../core/models/cards";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {
  }

  getCards(cardUrl: string): Observable<Array<ICard>> {
    return this.http.get(environment.baseUrl + cardUrl) as Observable<Array<ICard>>
  }

  getCardById(cardId: string): Observable<ICard | undefined> {
    if(cardId.includes('s')) {
      return this.http.get<ICard[]>(environment.baseUrl + 'sellCards.json')
        .pipe(map(data => data.find(({id}) => cardId === id)))
    } else {
      return this.http.get<ICard[]>(environment.baseUrl + 'rentCards.json')
        .pipe(map(data => data.find(({id}) => cardId === id)))
    }
  }
}
