import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingNewsComponent } from './adding-news.component';

describe('AddingNewsComponent', () => {
  let component: AddingNewsComponent;
  let fixture: ComponentFixture<AddingNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingNewsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
