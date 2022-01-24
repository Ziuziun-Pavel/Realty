import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";
// import { AuthenticationService } from "../core/services/authentication.service";
import { IUser } from '../core/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUser: IUser;
  constructor(
    // private router: Router,
    // private authenticationService: AuthenticationService
  ) {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')|| "{}") : '';
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  // logout() {
  //   this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }
}
