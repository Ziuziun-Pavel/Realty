import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsItem } from '../../../core/models/news';
import { environment } from '../../../../environments/environment';
import { findCardById } from "../../../shared/utilits/findCardById";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<Array<NewsItem>> {
    return this.http.get( environment.baseUrl + 'newsCards.json') as Observable<Array<NewsItem>>
  }

  getNewsById(newsCardId: string | undefined): Observable<NewsItem | undefined> {
    return findCardById(this.http.get<NewsItem[]>(environment.baseUrl + "newsCards.json"), newsCardId)
  }
}
