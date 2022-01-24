import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user: Observable<IUser[]>;
  currentUser: IUser;
  error: string;

  constructor(
    private userService: UserService
    ) {
    this.user = this.userService.getUsers();
    this.user.subscribe(
      (user) => (this.currentUser = user[0]),
      (error) => {
        this.error = error;
      }
    );
  }

  ngOnInit(): void {  }

}
