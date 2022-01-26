import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../../services/card.service';
import { ICard } from '../../../../../core/models/cards';

@Component({
  selector: 'app-rent-cards',
  templateUrl: './rent-cards.component.html',
  styleUrls: ['./rent-cards.component.scss'],
})
export class RentCardsComponent implements OnInit {

  cards: Observable<Array<ICard>> | undefined;

  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getRentCards();
  }
}
