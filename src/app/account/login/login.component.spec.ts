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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const email = component.loginForm['controls']['userEmail'];
    const password = component.loginForm['controls']['password'];

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

  it(`should call the onSubmit() method`, (() => {
    const fnc = spyOn(component, 'onSubmit');
    const el = fixture.debugElement.query(By.css('form'));

    el.triggerEventHandler('ngSubmit',null);
    expect(fnc).toHaveBeenCalled();
  }));


});
