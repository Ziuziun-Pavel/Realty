import { Component, OnInit } from '@angular/core';
import { Item } from "../../../../../core/models/news";
import { Observable } from "rxjs";
import { NewsService } from "../../../services/news.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-page-for-news-card',
  templateUrl: './page-for-news.component.html',
  styleUrls: ['./page-for-news.component.scss']
})
export class PageForNewsComponent implements OnInit {

  newsCard?: Observable<Item|undefined>;
  newsCardId: string;

  constructor(private readonly activateRoute: ActivatedRoute, private readonly cardService: NewsService) {
    this.newsCardId = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.newsCard = this.cardService.getNewsById(this.newsCardId);
  }

}
