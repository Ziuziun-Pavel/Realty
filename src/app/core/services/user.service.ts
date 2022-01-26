import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private users: Array<IUser> = [];

  constructor(
    private router: Router,
  ) { }

  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  login(enteredEmail:string, enteredPassword: string) {

    let flag = false;
    for (let i = 0; i < this.users.length; i++) {
      if (enteredEmail === (this.users[i].userEmail.toLowerCase()) && enteredPassword === (this.users[i].password)) {
        flag = true;
        break;
      }
    }

    if (flag) {
      alert('Добро пожаловать');
      this.router.navigate(['/']);
    } else {
      alert('Неверный логин или пароль');
    }
  }

  register(user:IUser): Observable<IUser[]> {
    user.id = this.users.length ? Math.max(...this.users.map(x => x.id)) + 1 : 1;
    this.users.push(user);
    return of(this.users);
  }
}




