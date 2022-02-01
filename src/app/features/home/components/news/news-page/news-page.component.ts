import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../../../../core/models/news';
import { Observable } from 'rxjs';
import { NewsService } from '../../../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flat-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {

  newsCard: Observable<NewsItem | undefined>;

  newsCardId: string | undefined;

  constructor(private readonly activateRoute: ActivatedRoute, private readonly cardService: NewsService) {  }

  ngOnInit(): void {
    this.newsCardId = this.activateRoute.snapshot.params.id;
    this.newsCard = this.cardService.getNewsById(this.newsCardId);
  }

}
