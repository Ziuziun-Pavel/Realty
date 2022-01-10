import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface ICard {
  url: string,
  description: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsCardService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<Array<ICard>> {
    return this.http.get('assets/data/newsCards.json') as Observable<Array<ICard>>
  }
}
