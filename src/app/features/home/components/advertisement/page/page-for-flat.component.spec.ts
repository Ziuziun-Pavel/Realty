import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForFlat } from './page-for-flat.component';

describe('PageComponent', () => {
  let component: PageForFlat;
  let fixture: ComponentFixture<PageForFlat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageForFlat ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForFlat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
