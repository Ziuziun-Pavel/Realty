import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUser } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`/auth/register/details`);
  }

  register(user:IUser) {
    return this.http.post(`/auth/register`, user);
  }
}
