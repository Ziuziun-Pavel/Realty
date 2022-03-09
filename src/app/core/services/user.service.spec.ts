import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { of } from 'rxjs';
import { IUser } from '../models/user';

describe('UserService', () => {
  let service: UserService;
  let MockUser: IUser;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    MockUser = {
      id: '1sd78sdf',
      userName: 'John',
      userSurname: 'Smith',
      userEmail: 'asd@gmail.com',
      password: '1234567',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get logged user', () => {
    let user: IUser;
    spyOn(service, 'getLoggedUser').and.returnValue(of(MockUser));
    service.getLoggedUser();
    user = MockUser;

    expect(service.getLoggedUser).toHaveBeenCalled();
    expect(user).toEqual(MockUser);
  });

  it('should get all users', () => {
    let users: IUser[] = [MockUser];
    spyOn(service, 'getUsers').and.returnValue(of(users));
    service.getUsers();

    expect(service.getUsers).toHaveBeenCalled();
    expect(users.length).toBe(1);
  });

  it('should update user', (done) => {
    let updatedUser: IUser = {
      id: '32ujolsf',
      userName: 'Bill',
      userSurname: 'Smith',
      userEmail: 'lllk@gmail.com',
      password: '5346876',
    };
    spyOn(service, 'updateUser').and.returnValue(of(MockUser));
    service.updateUser(updatedUser).subscribe((user) => {
      user = updatedUser;
      expect(service.updateUser).toHaveBeenCalled();
      expect(user).toEqual(updatedUser);
    });
    done();
  });

});
