import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from '../../../../../core/models/news';
import { NewsService } from '../../../services/news.service';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {
  public searchText: string = '';

  public newsCards: Observable<Array<NewsItem>>;

  constructor(
    private readonly cardService: NewsService,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.newsCards = this.cardService.getNews();
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

}
