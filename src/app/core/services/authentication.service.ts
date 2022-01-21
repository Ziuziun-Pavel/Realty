import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { IUser } from "../models/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem("currentUser") || "{}"));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`auth/login`, {
      email,
      password
    })
      .pipe(map(user => {
        if (user && user.token) {
// store user details in local storage to keep user logged in

          localStorage.setItem("currentUser", JSON.stringify(user.result));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
// remove user data from local storage for log out
    localStorage.removeItem("currentUser");
    // this.currentUserSubject.next(null);
  }
}
