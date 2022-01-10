import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCardComponent } from './rent-card.component';

describe('RentCardComponent', () => {
  let component: RentCardComponent;
  let fixture: ComponentFixture<RentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
