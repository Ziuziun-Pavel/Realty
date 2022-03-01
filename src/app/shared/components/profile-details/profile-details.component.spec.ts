import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsComponent } from './profile-details.component';
import { AuthService } from '../../../core/services/auth.service';
import { MockAuthService } from '../../../core/services/auth.service.mock';
import { UserService } from '../../../core/services/user.service';
import { MockUserService } from '../../../core/services/user.service.mock';

describe('ProfileDetailsComponent', () => {
  let component: ProfileDetailsComponent;
  let fixture: ComponentFixture<ProfileDetailsComponent>;
  let MockUser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsComponent ],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService
        },
        {
          provide: UserService,
          useClass: MockUserService
        },
        ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsComponent);
    component = fixture.componentInstance;
    MockUser = {
      id: '1',
      userName: 'admin',
      userSurname: 'admin',
      userEmail: 'admin@gmail.com',
    };
    component.currentUser = MockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
