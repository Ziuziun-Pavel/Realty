import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsListComponent } from './adverts-list.component';
import { CardService } from '../../features/home/services/card.service';
import { MockCardService } from '../../features/home/services/card.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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

  it('should call getAddedCards from CardService',  () => {
    spyOn(cardService, 'getAddedCards');
    component.ngOnInit();
    fixture.detectChanges();
    expect(cardService.getAddedCards).toHaveBeenCalled();
  });

  it('should call Delete() from CardService',  () => {
    spyOn(cardService, 'deleteCard');
    const cardId = 'bu2bhu21';
    component.onDelete(cardId);
    expect(cardService.deleteCard).toHaveBeenCalled();
  });

});
