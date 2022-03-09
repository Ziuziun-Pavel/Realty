import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUser } from '../../core/models/user';
import { AuthService } from '../../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminProfileComponent implements OnInit{
  public user: IUser | undefined;

  private userID: string;

  constructor(private readonly authService: AuthService,    private readonly activateRoute: ActivatedRoute,
  ) {  }

  ngOnInit() {
    this.userID = this.activateRoute.snapshot.params.id;

    this.authService.getUserById(this.userID).subscribe((admin) => {
      this.user = admin;
    });
  }

}
