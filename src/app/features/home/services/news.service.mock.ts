import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem } from '../../../core/models/news';

@Injectable({
  providedIn: 'root',
})
export class MockNewsService {

  constructor() { }

  public getNews(): Observable<Array<NewsItem>> {
    return of([])
  }

  public getNewsById() {
    return {};
  }
}
