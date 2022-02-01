import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertsComponent } from './add-adverts.component';

describe('AddAdvertsComponent', () => {
  let component: AddAdvertsComponent;
  let fixture: ComponentFixture<AddAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
