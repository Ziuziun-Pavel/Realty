import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { MockAuthService } from '../../core/services/auth.service.mock';
import { LoaderService } from '../../shared/services/loader.service';
import { MockLoaderService } from '../../shared/services/loader.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { IUser } from '../../core/models/user';
import { of } from 'rxjs';
import { Role } from '../../core/models/role.rs';
import { FakeMatIconRegistry } from '@angular/material/icon/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule ],
      providers: [
        FormBuilder,
        {
          provide: AuthService,
          useClass: MockAuthService
        },
        {
          provide: LoaderService,
          useClass: MockLoaderService
        },
        { provide: ToastrService, useValue: toastrService }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    spyOn(component.router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const email = component.loginForm.controls.userEmail;
    const password = component.loginForm.controls.password;

    email.setValue('asd@gmail.com');
    password.setValue('1234567');

    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it('should test form validity', () => {
    expect(component.loginForm.valid).toBeFalse();
    component.loginForm.controls.userEmail.setValue('asd@asd.com');
    component.loginForm.controls.password.setValue('text');
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('should test for correct email', () => {
    component.loginForm.controls.userEmail.setValue('asdfdfdfd');
    expect(component.loginForm.hasError('email')).toBeDefined();
  })

  it('should be required', () => {
    expect(component.loginForm.controls.password.hasError('required')).toBeTruthy();

    component.loginForm.controls.password.setValue('a');

    expect(component.loginForm.controls.password.hasError('required')).toBeFalse();
  });

  it('should call the onSubmit() method', (() => {
    const fnc = spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit',null);
    expect(fnc).toHaveBeenCalled();
  }));

  it('should submitted become true' , () => {
    const form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit',null);
    component.submitted = true;
    expect(component.submitted).toBeTruthy();
  });

  it('should go to url, if user has no account',  () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement
      .getAttribute('href');

    expect(href).toEqual('/register');
  });

});

