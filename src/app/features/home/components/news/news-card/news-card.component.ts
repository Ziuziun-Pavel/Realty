import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ICard, NewsCardService } from "../../../services/news-card.service";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  cards: Observable<Array<ICard>> | undefined;

  constructor(private readonly cardService: NewsCardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }

}
