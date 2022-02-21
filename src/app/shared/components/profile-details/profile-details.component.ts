import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { IUser } from '../../../core/models/user';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {

  @Input() currentUser: IUser | undefined;

  constructor(
    private readonly authService: AuthService,
  ) { }

  public isAdmin() {
    return this.authService.isAdmin();
  }

  public deleteAccount():void {
    this.authService.logout();
  }

}
