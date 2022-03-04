import { Component } from '@angular/core';
import { IUser } from '../../core/models/user';
import { regUsers } from '../../../assets/data/users';
import { Role } from '../../core/models/role.rs';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent {
  public user?: IUser = regUsers.find(item => item.role === Role.Admin);
}
