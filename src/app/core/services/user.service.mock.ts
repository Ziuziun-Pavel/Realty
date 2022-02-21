import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MockUserService {

  public getLoggedUser() {
    return of({});
  }

  public getUsers(): Observable<IUser[]> {
    return of([]);
  }

  public updateUser() {
    return of({});
  }

}




