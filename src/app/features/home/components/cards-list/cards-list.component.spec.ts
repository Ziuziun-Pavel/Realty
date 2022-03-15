import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListComponent } from './cards-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardsListComponent', () => {
  let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const title = 'Результаты поиска:';
    const el = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(el.textContent).toEqual(title);
  });

});
