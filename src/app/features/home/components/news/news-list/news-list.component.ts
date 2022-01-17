import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from "rxjs";
import {Item} from "../../../../../core/models/news";
import {NewsService} from "../../../services/news.service";
=======
import { Observable } from 'rxjs';
import { NewsItem } from '../../../../../core/models/news';
import { NewsService } from '../../../services/news.service';
>>>>>>> 9c9e099 (extract duplicate code to new function)

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

<<<<<<< HEAD
  cards: Observable<Array<Item>> | undefined;
=======
  newsCards: Observable<Array<NewsItem>> | undefined;
>>>>>>> 9c9e099 (extract duplicate code to new function)

  constructor(private readonly cardService: NewsService) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.cards = this.cardService.showCards();
=======
    this.newsCards = this.cardService.getNews();
>>>>>>> 9c9e099 (extract duplicate code to new function)
  }

}
