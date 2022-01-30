import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  user: Observable<IUser>;

  currentUser: IUser;

  error: string;

  constructor(
    private userService: UserService,
  ) {
    this.user = this.userService.getLoggedUser();
    this.user.subscribe(
      (user) => (this.currentUser = user),
      (error) => {
        this.error = error;
      },
    );
  }

}
