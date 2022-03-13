import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCardsComponent } from './rent-cards.component';
import { AuthService } from '../../../../../core/services/auth.service';
import { MockAuthService } from '../../../../../core/services/auth.service.mock';
import { CardService } from '../../../services/card.service';
import { MockCardService } from '../../../services/card.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RentCardsComponent', () => {
  let component: RentCardsComponent;
  let fixture: ComponentFixture<RentCardsComponent>;
  let authService: AuthService;
  let cardService: CardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentCardsComponent],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService,
        },
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
    fixture = TestBed.createComponent(RentCardsComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    cardService = fixture.debugElement.injector.get(CardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call isAdmin from AuthService', () => {
    const spy = spyOn(authService, 'isAdmin');
    component.isAdmin();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should call Delete() from CardService', () => {
    const spy = spyOn(cardService, 'deleteCard');
    const cardId = '1huhu2b';
    component.onDelete(cardId);
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should call getRentCards from CardService', () => {
    spyOn(cardService, 'getRentCards');
    component.ngOnInit();
    fixture.detectChanges();
    expect(cardService.getRentCards).toHaveBeenCalled();
  });

});
