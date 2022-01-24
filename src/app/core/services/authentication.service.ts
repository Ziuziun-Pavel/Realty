import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser') || "{}"));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  // login(email: string, password: string) {
  //   return this.http.post<any>('../assets/data/users.ts', {
  //     email,
  //     password
  //   })
  //     .pipe(map(user => {
  //       if (user && user.token) {
  //         localStorage.setItem('currentUser', JSON.stringify(user.result));
  //         this.currentUserSubject.next(user);
  //       }
  //       return user;
  //     }));
  // }

  logout() {
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }
}
