import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../../../../core/models/cards';
import { CardService } from '../../../services/card.service';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-favourite-cards',
  templateUrl: './favourite-cards.component.html',
  styleUrls: ['./favourite-cards.component.scss'],
})
export class FavouriteCardsComponent implements OnInit {
  public cards: Observable<ICard[]>;

  public favourite: boolean;

  constructor(
    public readonly cardService: CardService,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.cards = this.cardService.getFavouriteCards();
  }

  public onDelete(id: string) {
    this.cardService.deleteCard(id);
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

}
