import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../core/services/auth.service';
import { MockAuthService } from '../../core/services/auth.service.mock';
import { LoaderService } from '../../shared/services/loader.service';
import { MockLoaderService } from '../../shared/services/loader.service.mock';
import { ToastrService } from 'ngx-toastr';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserFormComponent } from '../../shared/components/user-form/user-form.component';
import { FormBuilder } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;

  const toastrService = {
    success: (
    ) => {},
    error: (
    ) => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent, UserFormComponent ],
      imports: [RouterTestingModule],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to url, if user already has account',  () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement
      .getAttribute('href');
    expect(href).toEqual('/login');
  });
});
