import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { regUsers } from '../../../assets/data/users';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  public getLoggedUser(): Observable<IUser> {
    return of(JSON.parse(localStorage.getItem('logUser') || '{}'));
  }

  public getUsers(): Observable<IUser[]> {
    return of(regUsers);
  }

  public updateUser(newUser: IUser): Observable<IUser> {
    let user = JSON.parse(localStorage.getItem('logUser') || '{}');

    user = {
      userName: newUser.userName,
      userSurname: newUser.userSurname,
      userEmail: newUser.userEmail,
      password: newUser.password,
      id: user.id
    };

    localStorage.setItem('logUser', JSON.stringify(user));
    return of(user);
  }
}




