import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatPageComponent } from './flat-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageComponent', () => {
  let component: FlatPageComponent;
  let fixture: ComponentFixture<FlatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatPageComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
