import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCardComponent } from './sell-card.component';
import { AuthService } from '../../../../../core/services/auth.service';
import { MockAuthService } from '../../../../../core/services/auth.service.mock';
import { CardService } from '../../../services/card.service';
import { MockCardService } from '../../../services/card.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardComponent', () => {
  let component: SellCardComponent;
  let fixture: ComponentFixture<SellCardComponent>;
  let authService: AuthService;
  let cardService: CardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellCardComponent],
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
    fixture = TestBed.createComponent(SellCardComponent);
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

  it('should call getSellCards from CardService', () => {
    const spy = spyOn(cardService, 'getSellCards');
    fixture.detectChanges();
    expect(spy.calls.any).toBeTruthy();
  });
});
