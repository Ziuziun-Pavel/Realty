import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsListComponent } from './adverts-list.component';
import { CardService } from '../../features/home/services/card.service';
import { MockCardService } from '../../features/home/services/card.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ICard } from '../../core/models/cards';
import { of } from 'rxjs';

describe('AdvertsListComponent', () => {
  let component: AdvertsListComponent;
  let fixture: ComponentFixture<AdvertsListComponent>;
  let cardService: CardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsListComponent ],
      providers: [
        {
          provide: CardService,
          useClass: MockCardService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsListComponent);
    component = fixture.componentInstance;
    cardService = fixture.debugElement.injector.get(CardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign value of adverts from CardService',  (done) => {
    let cards: ICard[];
    component.cards.subscribe((items => {
      cards = items;
    }))

    cardService.getAddedCards().subscribe((adverts) => {
      expect(cards).toEqual(adverts)
    })
    done();
  });

  it('should delete cards',  () => {
    spyOn(cardService, 'deleteCard');
    const cardId = 'bu2bhu21';
    component.onDelete(cardId);
    expect(cardService.deleteCard).toHaveBeenCalled();
  });

});
