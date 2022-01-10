import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { RentCardService, ICard } from "../../../services/rent-card.service";


@Component({
  selector: 'app-rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.scss']
})
export class RentCardComponent implements OnInit {

  cards: Observable<Array<ICard>>|undefined;

  constructor(private readonly cardService: RentCardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCards()
  }

}
