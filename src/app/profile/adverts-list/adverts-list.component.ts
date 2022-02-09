import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../core/models/cards';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.scss'],
})
export class AdvertsListComponent implements OnInit {
  public cards: Observable<ICard[]>;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.cards = this.userService.getAddedCards();
  }

}
