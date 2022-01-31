import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';
import { Router } from '@angular/router';
import { regUsers } from '../../../assets/data/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {

  }

  login(enteredEmail: string, enteredPassword: string):Observable<IUser | undefined> {
    let loggedUser = regUsers.find(item => item.userEmail.toLowerCase() === enteredEmail
      && enteredPassword === (item.password));
    if (loggedUser) {
      alert('Добро пожаловать');
      localStorage.setItem('logUser', JSON.stringify(loggedUser));
      this.router.navigate(['/']);
    } else {
      alert('Неверный логин или пароль');
    }
    return of(loggedUser);
  }

  logout() {
    localStorage.removeItem('logUser');
    this.router.navigate(['/register']);
  }
}
