import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCardsComponent } from './favourite-cards.component';

describe('FavouriteCardsComponent', () => {
  let component: FavouriteCardsComponent;
  let fixture: ComponentFixture<FavouriteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCardsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
