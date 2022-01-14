import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter, map, Observable} from 'rxjs';
import { environment } from "../../../../environments/environment";
import {ICard} from "../../../core/models/cards";



@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(cardUrl:string): Observable<Array<ICard>> {
    return this.http.get(environment.baseUrl + cardUrl) as Observable<Array<ICard>>
  }

  getCardById(id: number ): Observable<ICard[]>  {
    return this.http.get<ICard[]>(environment.baseUrl + 'sellCards.json')
      // .pipe(
      //   filter((item) => item.id === id),
      // map(data => {
      //     return data;
      //   }
      // )
  // )
  }
}
