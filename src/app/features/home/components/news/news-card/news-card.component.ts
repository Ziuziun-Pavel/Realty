import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NewsItem } from '../../../../../core/models/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  @Input()  card: NewsItem;
}
