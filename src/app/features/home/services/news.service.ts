import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem } from '../../../core/models/news';
import { findItemById } from '../../../shared/utilits/findItemById';
import * as uniqid from 'uniqid';
import { newsCards } from '../../../../assets/data/newsCards';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  public getNews(): Observable<Array<NewsItem>> {
    return of(newsCards);
  }

  public getNewsById(newsCardId: string | undefined): Observable<NewsItem | undefined> {
    return findItemById(of(newsCards), newsCardId);
  }

  public addNews(news: NewsItem): Observable<NewsItem[]> {
    news.id = uniqid();

    newsCards.push(news);

    return of(newsCards);
  }
}
