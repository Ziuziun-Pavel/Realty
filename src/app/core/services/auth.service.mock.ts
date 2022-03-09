import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';

@Injectable()
export class MockAuthService {

  public isUserAuthorised(): boolean {
    return true;
  }

  public isAdmin(): boolean {
    return true;
  }

  public login(){
    return of({});
  }

  public register(): Observable<IUser[]> {
    return of([]);
  }

}
