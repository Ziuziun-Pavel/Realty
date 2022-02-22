import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { Observable } from 'rxjs';
import { ICard } from '../../../../../core/models/cards';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-sell-card',
  templateUrl: './sell-card.component.html',
  styleUrls: ['./sell-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellCardComponent implements OnInit {
  public cards: Observable<Array<ICard>>;

  constructor(
    private readonly cardService: CardService,
    private readonly authService: AuthService,
  ) {  }

  ngOnInit(): void {
    this.cards = this.cardService.getSellCards();
  }


  public onDelete(id: string) {
    this.cardService.deleteCard(id);
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }
}
