import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICard } from '../../../../../core/models/cards';
import { CardService } from '../../../services/card.service';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card: ICard;

  @Input() public favourite: boolean = false;

  constructor(
    private readonly cardService: CardService,
    private readonly authService: AuthService,
  ) { }

  isAuthorized(): void {
    this.authService.isUserAuthorised();
  }

  onAddToFavorites() {
    this.cardService.addFavouriteCards(this.card);
    this.favourite = true;
  }

  onDeleteFromFavorites() {
    this.cardService.deleteFavouriteCards(this.card.id);
    this.favourite = false;
  }

}
