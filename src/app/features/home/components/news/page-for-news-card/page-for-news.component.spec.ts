import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForNewsComponent } from './page-for-news.component';

describe('PageForNewsCardComponent', () => {
  let component: PageForNewsComponent;
  let fixture: ComponentFixture<PageForNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageForNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
