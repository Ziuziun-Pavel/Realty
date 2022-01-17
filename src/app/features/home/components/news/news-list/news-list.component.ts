import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from '../../../../../core/models/news';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsCards: Observable<Array<NewsItem>> | undefined;

  constructor(private readonly cardService: NewsService) { }

  ngOnInit(): void {
    this.newsCards = this.cardService.getNews();
  }

}
