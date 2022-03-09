import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormConfig } from '../../../core/models/formConfig';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let formConfigMock: FormConfig;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      providers: [FormBuilder],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
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
    const inputName = component.userForm.controls.userName;
    const inputEmail = component.userForm.controls.userEmail;
    const inputPassword = component.userForm.controls.password;

    inputName.setValue('John');
    inputEmail.setValue('asd@gmail.com');
    inputPassword.setValue('1234567');

    expect(inputName).toBeTruthy();
    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
  });

  it('should test if the form is valid', () => {
    expect(component.userForm.valid).toBeFalse();

    component.userForm.controls.userName.setValue('John');
    component.userForm.controls.userEmail.setValue('asd@gmail.com');
    component.userForm.controls.password.setValue('1234567');
    component.userForm.controls.confirmPassword.setValue('1234567');

    expect(component.userForm.valid).toBeTruthy();
  });

  it('should be required', () => {
    expect(component.userForm.controls.userName.hasError('required')).toBeTruthy();
    expect(component.userForm.controls.userEmail.hasError('required')).toBeTruthy();
    expect(component.userForm.controls.password.hasError('required')).toBeTruthy();
    expect(component.userForm.controls.confirmPassword.hasError('required')).toBeTruthy();


    component.userForm.controls.userName.setValue('John');
    component.userForm.controls.userEmail.setValue('asd@gmail.com');
    component.userForm.controls.password.setValue('1234567');
    component.userForm.controls.confirmPassword.setValue('1234567');


    expect(component.userForm.controls.userName.hasError('required')).toBeFalse();
    expect(component.userForm.controls.userEmail.hasError('required')).toBeFalse();
    expect(component.userForm.controls.password.hasError('required')).toBeFalse();
    expect(component.userForm.controls.confirmPassword.hasError('required')).toBeFalse();
  });

  it('should call onSubmit() method', (() => {
    const fnc = spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit', null);
    expect(fnc).toHaveBeenCalled();
  }));

  it('should @Output form', (() => {
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

  it('should check password', (() => {
    const password = component.userForm.controls.password;
    const confirmPassword = component.userForm.controls.confirmPassword;

    password.setValue('1234567');
    confirmPassword.setValue('1234567');
    component.checkPasswords(password.value, confirmPassword.value);

    expect(confirmPassword.hasError('mustMatch')).toBeFalsy();
  }));
});
