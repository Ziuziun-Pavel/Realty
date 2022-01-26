import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../../core/models/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<Array<NewsItem>> {
    return this.http.get( environment.baseUrl + 'newsCards.json') as Observable<Array<NewsItem>>;
  }

  getNewsById(newsCardId: string | undefined): Observable<NewsItem | undefined> {
    return findItemById(this.http.get<NewsItem[]>(environment.baseUrl + 'newsCards.json'), newsCardId);
  }
}
