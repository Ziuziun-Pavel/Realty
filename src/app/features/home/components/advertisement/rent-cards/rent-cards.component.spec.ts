import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCardsComponent } from './rent-cards.component';
import { AuthService } from '../../../../../core/services/auth.service';
import { MockAuthService } from '../../../../../core/services/auth.service.mock';
import { CardService } from '../../../services/card.service';
import { MockCardService } from '../../../services/card.service.mock';
import { IUser } from '../../../../../core/models/user';
import { Role } from '../../../../../core/models/role.rs';
import { of } from 'rxjs';

describe('RentCardsComponent', () => {
  let component: RentCardsComponent;
  let fixture: ComponentFixture<RentCardsComponent>;
  let authService: AuthService;
  let cardService: CardService;
  let MockUser: IUser;
  let MockAdmin: IUser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentCardsComponent],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService
        },
        {
          provide: CardService,
          useClass: MockCardService
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCardsComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    cardService = fixture.debugElement.injector.get(CardService);

    MockUser = {
      id: '1sdh34hn',
      userName: 'John',
      userSurname: 'Smith',
      userEmail: 'asd@gmail.com',
      password: '12345678',
    };
    MockAdmin =   {
      id: 'admin1',
      userName: 'Admin',
      userSurname: 'Admin',
      userEmail: 'admisitrator1@gmail.com',
      role: Role.Admin,
      password: '12345678',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should call isAdmin from AuthService', () => {
    const spy = spyOn(authService, 'isAdmin').and.returnValue(true);
    component.isAdmin();
    expect(spy.calls.any()).toBeTruthy()
  });

  it('should call Delete() from CardService', () => {
    const spy = spyOn(cardService, 'deleteCard');
    const cardId = '1huhu2b';
    component.onDelete(cardId);
    expect(spy.calls.any()).toBeTruthy()
  });

  it('should call getRentCards from CardService', () => {
    const spy = spyOn(cardService, 'getRentCards');
    fixture.detectChanges();
    expect(spy.calls.any).toBeTruthy();
  });


});
