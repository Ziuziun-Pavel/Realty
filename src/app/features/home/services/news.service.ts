import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../../core/models/news";
=======
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NewsItem } from '../../../core/models/news';
import { environment } from '../../../../environments/environment';
>>>>>>> 9c9e099 (extract duplicate code to new function)

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  showCards(): Observable<Array<Item>> {
    return this.http.get('assets/data/newsCards.json') as Observable<Array<Item>>
=======
  getNews(): Observable<Array<NewsItem>> {
    return this.http.get( environment.baseUrl + 'newsCards.json') as Observable<Array<NewsItem>>
  }

  getNewsById(newsCardId: string | undefined): Observable<NewsItem | undefined> {
      return this.http.get<NewsItem[]>( environment.baseUrl + 'newsCards.json')
        .pipe(map(data => data.find(({id}) => newsCardId === id)))
>>>>>>> 9c9e099 (extract duplicate code to new function)
  }
}
