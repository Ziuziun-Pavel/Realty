import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { MockAuthService } from '../../core/services/auth.service.mock';
import { LoaderService } from '../../shared/services/loader.service';
import { MockLoaderService } from '../../shared/services/loader.service.mock';
import { RouterTestingModule } from '@angular/router/testing';

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
      imports: [ RouterTestingModule],
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
