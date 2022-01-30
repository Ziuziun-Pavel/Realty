import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { regUsers } from '../../../assets/data/users';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  getLoggedUser(): Observable<IUser> {
    return of(JSON.parse(localStorage.getItem('logUser') || '{}'));
  }

  getUsers(): Observable<IUser[]> {
    return of(regUsers);
  }

  register(user: IUser): Observable<IUser[]> {
    user.id = regUsers.length ? Math.max(...regUsers.map(x => x.id)) + 1 : 1;
    regUsers.push(user);
    return of(regUsers);
  }
}




