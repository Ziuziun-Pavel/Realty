import { Component, Input } from '@angular/core';
import { Item } from "../../../../../core/models/news";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input()  card?: Item;
}
