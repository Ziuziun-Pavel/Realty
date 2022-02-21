import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../core/services/auth.service';
import { MockAuthService } from '../../core/services/auth.service.mock';
import { LoaderService } from '../../shared/services/loader.service';
import { MockLoaderService } from '../../shared/services/loader.service.mock';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/services/user.service';
import { MockUserService } from '../../core/services/user.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IUser } from '../../core/models/user';
import { of } from 'rxjs';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let userService: UserService;

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
      declarations: [EditComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService
        },
        {
          provide: UserService,
          useClass: MockUserService
        },
        {
          provide: LoaderService,
          useClass: MockLoaderService
        },
        { provide: ToastrService, useValue: toastrService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
