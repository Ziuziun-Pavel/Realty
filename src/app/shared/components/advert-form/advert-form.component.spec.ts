import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertFormComponent } from './advert-form.component';
import { FormBuilder } from '@angular/forms';

describe('AdvertFormComponent', () => {
  let component: AdvertFormComponent;
  let fixture: ComponentFixture<AdvertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertFormComponent ],
      providers: [FormBuilder]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
