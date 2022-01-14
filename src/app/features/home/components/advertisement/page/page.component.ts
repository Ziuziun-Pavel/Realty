import {Component, OnInit } from '@angular/core';
import { ICard } from "../../../../../core/models/cards";
import { ActivatedRoute } from "@angular/router";
import { CardService } from "../../../services/card.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  cards: Observable<ICard[]> |undefined;
  id: number;

  constructor(private readonly activateRoute: ActivatedRoute,
              private readonly cardService: CardService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.cards = this.cardService.getCardById(this.id)
  }

}
