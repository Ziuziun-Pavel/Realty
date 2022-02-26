import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCardsComponent } from './rent-cards.component';
import { AuthService } from '../../../../../core/services/auth.service';
import { MockAuthService } from '../../../../../core/services/auth.service.mock';
import { CardService } from '../../../services/card.service';
import { MockCardService } from '../../../services/card.service.mock';

describe('RentCardsComponent', () => {
  let component: RentCardsComponent;
  let fixture: ComponentFixture<RentCardsComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
