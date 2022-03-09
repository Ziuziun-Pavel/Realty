import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertFormComponent } from './advert-form.component';
import { FormBuilder } from '@angular/forms';
import { FormConfig } from '../../../core/models/formConfig';
import { By } from '@angular/platform-browser';

describe('AdvertFormComponent', () => {
  let component: AdvertFormComponent;
  let fixture: ComponentFixture<AdvertFormComponent>;
  let formConfigMock: FormConfig;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertFormComponent ],
      providers: [FormBuilder],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertFormComponent);
    component = fixture.componentInstance;
    formConfigMock = {
      title: '',
      submitted: false,
      loading: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const inputPrice = component.advertForm.controls.price;
    const inputStreet = component.advertForm.controls.street;

    inputPrice.setValue(400000);
    inputStreet.setValue('ул. Пушкина');

    expect(inputPrice).toBeTruthy();
    expect(inputStreet).toBeTruthy();
  });

  it('should test if the form is valid', () => {
    expect(component.advertForm.valid).toBeFalse();
  });

  it('should be required', () => {
    expect(component.advertForm.controls.price.hasError('required')).toBeTruthy();
    expect(component.advertForm.controls.street.hasError('required')).toBeTruthy();
    expect(component.advertForm.controls.seller.hasError('required')).toBeTruthy();
    expect(component.advertForm.controls.region.hasError('required')).toBeTruthy();


    component.advertForm.controls.price.setValue(400000);
    component.advertForm.controls.street.setValue('улица Пушкина');
    component.advertForm.controls.seller.setValue('Павел');
    component.advertForm.controls.region.setValue('Минская');

    expect(component.advertForm.controls.price.hasError('required')).toBeFalse();
    expect(component.advertForm.controls.street.hasError('required')).toBeFalse();
    expect(component.advertForm.controls.seller.hasError('required')).toBeFalse();
    expect(component.advertForm.controls.region.hasError('required')).toBeFalse();
  });

  it('should call the onSubmit() method', (() => {
    const fnc = spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit', null);
    expect(fnc).toHaveBeenCalled();
  }));

  it('should correctly @Output form', (() => {
    spyOn(component.Submit, 'emit');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.Submit.emit).toBeTruthy();
  }));

  it('should correctly render form title', (() => {
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toEqual(formConfigMock.title);
  }));

});
