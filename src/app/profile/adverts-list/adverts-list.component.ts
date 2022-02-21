import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../core/models/cards';
import { CardService } from '../../features/home/services/card.service';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.scss'],
})
export class AdvertsListComponent implements OnInit {
  public cards: Observable<ICard[]>;

  constructor(
    private readonly cardService: CardService,
  ) {
  }

  ngOnInit(): void {
    this.cards = this.cardService.getAddedCards();
  }

  public onDelete(id: string) {
    this.cardService.deleteCard(id);
  }

}
