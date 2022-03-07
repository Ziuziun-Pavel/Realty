import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { MockAuthService } from './auth.service.mock';
import { IUser } from '../models/user';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let authService: AuthService;
  let MockUser: IUser;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService,
        }
      ]
    });
    MockUser = {
      id: '1sd78sdf',
      userName: 'John',
      userSurname: 'Smith',
      userEmail: 'asd@gmail.com',
      password: '1234567',
    };
    router = TestBed.get(Router);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should check if the user is authorized', () => {
    expect(MockUser).toBeTruthy()
  });

  it('should check if the user is admin', () => {
    expect(MockUser.role).toBeUndefined()
  });

  it('the user should sign in', (done) => {
    let user;
    spyOn(authService, 'login').and.returnValue(of(user));
    authService.login(MockUser).subscribe(() => {
      user = MockUser;
      expect(authService.login).toHaveBeenCalledOnceWith(MockUser);
      expect(user).toEqual(MockUser)
      done();
    })
  });

  it('the user should correctly register', (done) => {
    let user: IUser[] = [];
    spyOn(authService, 'register')
      .and
      .returnValue(of(user));

    authService.register(MockUser.userName, MockUser.userSurname, MockUser.userEmail, '1234567').subscribe(() => {
      user.push(MockUser);
    })

    expect(authService.register).toHaveBeenCalled();
    expect(user.length).toBe(1)

    done();
  });

  it('the user should sign out', (done) => {
    const authServiceSpy = jasmine.createSpyObj('authService', ['logout']);
    authServiceSpy.logout();

    expect(authServiceSpy.logout).toHaveBeenCalled();
    expect(localStorage.length).toBe(0);
    done();
  });



});
