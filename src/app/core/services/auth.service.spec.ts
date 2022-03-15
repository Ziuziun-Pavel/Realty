import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { IUser } from '../models/user';
import { RouterTestingModule } from '@angular/router/testing';
import { Role } from '../models/role.rs';

describe('AuthService', () => {
  let authService: AuthService;
  let mockUser: IUser = {
    id: '1sd78sdf',
    userName: 'John',
    userSurname: 'Smith',
    userEmail: 'asd@gmail.com',
    role: Role.User,
    password: '1234567',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: AuthService,
        },
      ],
    });
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should check if the user is admin', () => {
    authService.loggedUser = mockUser;
    expect(authService.isAdmin()).toBe(false);
    mockUser.role = Role.Admin;
    expect(authService.isAdmin()).toBe(true);
  });

});
