import { Component } from '@angular/core';
import { IUser } from '../../core/models/user';
import { admin } from '../../../assets/data/admin';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent {

  public user: IUser = admin[0];
}
