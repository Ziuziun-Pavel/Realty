import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsItem } from '../../../core/models/news';
import { findItemById } from '../../../shared/utilits/findItemById';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(): Observable<Array<NewsItem>> {
    return this.http.get( environment.baseUrl + 'newsCards.json') as Observable<Array<NewsItem>>;
  }

  public getNewsById(newsCardId: string | undefined): Observable<NewsItem | undefined> {
    return findItemById(this.http.get<NewsItem[]>(environment.baseUrl + 'newsCards.json'), newsCardId);
  }
}
