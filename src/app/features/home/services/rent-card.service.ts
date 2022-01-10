import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export interface ICard {
  url: string,
  price: string,
  square: string,
  street: string,
  metro: string
}

@Injectable({
  providedIn: 'root'
})
export class RentCardService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<Array<ICard>> {
    return this.http.get('assets/data/rentCards.json') as Observable<Array<ICard>>
  }
}
