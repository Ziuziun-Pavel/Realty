import { Component, OnInit } from '@angular/core';
import { SellCardService, ICard } from '../../../services/sell-card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sell-card',
  templateUrl: './sell-card.component.html',
  styleUrls: ['./sell-card.component.scss']
})
export class SellCardComponent implements OnInit {

  cards: Observable<Array<ICard>>|undefined;

  constructor(private readonly cardService: SellCardService) { }


  ngOnInit(): void {
    this.cards = this.cardService.getCards()
  }

}
