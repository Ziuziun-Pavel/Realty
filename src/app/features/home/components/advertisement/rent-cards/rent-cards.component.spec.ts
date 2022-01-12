import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCardsComponent } from './rent-cards.component';

describe('RentCardsComponent', () => {
  let component: RentCardsComponent;
  let fixture: ComponentFixture<RentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
