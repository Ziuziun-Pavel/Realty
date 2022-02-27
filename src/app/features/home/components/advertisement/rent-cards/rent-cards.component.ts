import { ChangeDetectionStrategy, Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../../services/card.service';
import { ICard } from '../../../../../core/models/cards';

@Component({
  selector: 'app-rent-cards',
  templateUrl: './rent-cards.component.html',
  styleUrls: ['./rent-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RentCardsComponent implements OnInit {
  public cards: Observable<Array<ICard>>;

  constructor(private readonly cardService: CardService) { }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('Parent Changes', changes);
  // }

  ngOnInit(): void {
    this.cards = this.cardService.getRentCards();
  }

  // ngDoCheck() {
  //   console.log('Parent Do check');
  // }
}
