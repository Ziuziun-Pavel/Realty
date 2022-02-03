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

  public keepChanges(newUser: any ): Observable<IUser> {
    let user = JSON.parse(localStorage.getItem('logUser') || '{}');

    for (let propName in user) {
      if (propName === 'id') {
        continue;
      }
      user[propName] = newUser[propName];
    }
    localStorage.setItem('logUser', JSON.stringify(user));
    return of(user);
  }
}




