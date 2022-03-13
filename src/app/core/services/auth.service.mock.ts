import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';
import { findItemById } from '../../shared/utilits/findItemById';
import { regUsers } from '../../../assets/data/users';

@Injectable()
export class MockAuthService {

  public isUserAuthorised(): boolean {
    return true;
  }

  public isAdmin(): boolean {
    return true;
  }

  public login(): Observable<object>{
    return of({});
  }

  public register(): Observable<IUser[]> {
    return of([]);
  }

  public logout(): void {

  }

  public getUserById() {
    return of({});
  }

}
