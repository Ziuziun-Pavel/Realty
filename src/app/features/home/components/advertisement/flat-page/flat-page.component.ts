import { Component, OnInit } from '@angular/core';
import { CardType, ICard } from '../../../../../core/models/cards';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../../services/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flat-page',
  templateUrl: './flat-page.component.html',
  styleUrls: ['./flat-page.component.scss'],
})
export class FlatPageComponent implements OnInit {

  card?: Observable<ICard | undefined>;
  flatCardType:string;
  cardId: string;

  constructor(private readonly activateRoute: ActivatedRoute, private readonly cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardId = this.activateRoute.snapshot.params['id'];
    this.flatCardType = this.activateRoute.snapshot.params['type'];

    if(this.flatCardType === CardType.sell) {
      this.card = this.cardService.getSellCardById(this.cardId);
    } else {
      this.card = this.cardService.getRentCardById(this.cardId);
    }
  }
}
