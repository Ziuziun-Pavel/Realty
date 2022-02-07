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


}




