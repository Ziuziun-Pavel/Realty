import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable} from "rxjs";
import { Item } from "../../../core/models/news";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  showCards(): Observable<Array<Item>> {
    return this.http.get( environment.baseUrl + 'newsCards.json') as Observable<Array<Item>>
  }

  getNewsById(newsCardId: string): Observable<Item | undefined> {
      return this.http.get<Item[]>( environment.baseUrl + 'newsCards.json')
        .pipe(map(data => data.find(({id}) => newsCardId === id)))
  }
}
