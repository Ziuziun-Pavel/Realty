import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';
import { Router } from '@angular/router';
import { regUsers } from '../../../assets/data/users';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {  }

  public login(user: IUser):Observable<IUser | undefined> {
    let loggedUser = regUsers.find(item => item.userEmail.toLowerCase() === user.userEmail
      && user.password === (item.password));

    if (loggedUser) {
      localStorage.setItem('logUser', JSON.stringify(loggedUser));
      return of(loggedUser);
    } else {
      alert('Неверный логин или пароль')
      throw new Error('неверный пароль');
    }

  }

  public register(user: IUser): Observable<IUser[]> {
    user.id = regUsers.length ? Math.max(...regUsers.map(x => x.id)) + 1 : 1;
    regUsers.push(user);
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
