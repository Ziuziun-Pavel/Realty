import * as uniqid from 'uniqid';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { Router } from '@angular/router';
import { regUsers } from '../../../assets/data/users';
import { Role } from '../models/role.rs';
import { findItemById } from '../../shared/utilits/findItemById';

@Injectable()
export class AuthService {
  public loggedUser: IUser | undefined;

  constructor(private router: Router) {  }

  public isUserAuthorised(): boolean {
    return !!localStorage.getItem('logUser') ;
  }

  public isAdmin(): boolean {
    return this.loggedUser?.role === Role.Admin;
  }

  public login(user: IUser):Observable<IUser | undefined> {
    this.loggedUser = regUsers.find(item => item.userEmail.toLowerCase() === user.userEmail
      && user.password === (item.password));

    if (this.loggedUser) {
      localStorage.setItem('logUser', JSON.stringify(this.loggedUser));
      if (this.isAdmin()) {
        alert('Здравствуйте, Администратор!!!');
      }
      return of(this.loggedUser);
    } else {
      return throwError('Неверный логин или пароль');
    }
  }

  public register(
    userName: string,
    userSurname: string,
    userEmail: string,
    password: string): Observable<IUser[]> {
    let id = uniqid();
    regUsers.push({
      id,
      userName,
      userSurname,
      userEmail,
      password,
    });
    return of(regUsers);
  }

  public logout(): void {
    localStorage.removeItem('logUser');
    this.router.navigate(['/register']);
  }

  public getUserById(userId: string): Observable<IUser | undefined> {
    return findItemById(of(regUsers), userId);
  }

}
