import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../../core/models/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  showCards(): Observable<Array<Item>> {
    return this.http.get('assets/data/newsCards.json') as Observable<Array<Item>>
  }
}
