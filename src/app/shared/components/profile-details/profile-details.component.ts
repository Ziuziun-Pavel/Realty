import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { IUser } from '../../../core/models/user';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() currentUser: IUser;

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

  public deleteAccount():void {
    this.authService.logout();
  }

}
