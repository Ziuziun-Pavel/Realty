<<<<<<< HEAD
import {Component, Input} from '@angular/core';
import {Item} from "../../../../../core/models/news";
=======
import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../../../core/models/news';
>>>>>>> 9c9e099 (extract duplicate code to new function)

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
<<<<<<< HEAD
  @Input()  card?: Item;
  constructor() { }

=======
  @Input()  card?: NewsItem;
>>>>>>> 9c9e099 (extract duplicate code to new function)
}
