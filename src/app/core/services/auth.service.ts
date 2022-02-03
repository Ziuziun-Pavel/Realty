import * as uniqid from 'uniqid';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { Router } from '@angular/router';
import { regUsers } from '../../../assets/data/users';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {  }

  public isUserAuthorised() {
    return localStorage.getItem('logUser') !== null;
  }

  public login(user: IUser):Observable<IUser | undefined> {

    let loggedUser = regUsers.find(item => item.userEmail.toLowerCase() === user.userEmail
      && user.password === (item.password));

    if (loggedUser) {
      localStorage.setItem('logUser', JSON.stringify(loggedUser));
      return of(loggedUser);
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

  public logout() {
    localStorage.removeItem('logUser');
    this.router.navigate(['/register']);
  }

  public checkPasswords(
    controlName: string,
    matchingControlName: string,
  ) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
