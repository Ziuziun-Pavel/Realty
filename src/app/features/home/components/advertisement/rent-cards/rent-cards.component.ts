import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../../services/card.service';
import { ICard } from '../../../../../core/models/cards';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-rent-cards',
  templateUrl: './rent-cards.component.html',
  styleUrls: ['./rent-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentCardsComponent implements OnInit {
  public cards: Observable<Array<ICard>>;

  constructor(
    private readonly cardService: CardService,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.cards = this.cardService.getRentCards();
  }

  public onDelete(id: string) {
    this.cardService.deleteCard(id);
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }
}
