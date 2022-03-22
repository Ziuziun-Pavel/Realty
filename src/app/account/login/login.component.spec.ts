import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { MockAuthService } from '../../core/services/auth.service.mock';
import { LoaderService } from '../../shared/services/loader.service';
import { MockLoaderService } from '../../shared/services/loader.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IUser } from '../../core/models/user';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let mockUser: IUser = {
    userName: '',
    userSurname: '',
    id: 'ad21j23j',
    password: '12345678',
    userEmail: 'admisitrator1@gmail.com',
  };

  const toastrService = {
    success: () => {},
    error: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule ],
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder,
        {
          provide: AuthService,
          useClass: MockAuthService,
        },
        {
          provide: LoaderService,
          useClass: MockLoaderService,
        },
        { provide: ToastrService, useValue: toastrService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test form validity', () => {
    expect(component.loginForm.valid).toBeFalse();
    component.loginForm.controls.userEmail.setValue('asd@asd.com');
    component.loginForm.controls.password.setValue('text');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('button should be disabled if the form is invalid', () => {
    const button = fixture.debugElement.query(By.css('.btn-register')).nativeElement;
    component.loginForm.controls.userEmail.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(button.disabled).toBeTruthy();
  });

  it('should call the onSubmit() method', ((done) => {
    spyOn(authService, 'login').and.returnValue(of(mockUser));
    const form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit', null);
    component.loginForm.patchValue({
      password: '12345678',
      userEmail: 'admisitrator1@gmail.com',
    });
    authService.login(component.loginForm.value).subscribe(() => {
      expect(component.loginForm.value.userEmail).toEqual(mockUser.userEmail);
      expect(component.loginForm.value.password).toEqual(mockUser.password);
    });
    expect(authService.login).toHaveBeenCalled();
    done();
  }));

  it('should go to url, if user has no account',  () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement
      .getAttribute('href');

    expect(href).toEqual('/register');
  });

});

