import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IUser } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  private user: Observable<IUser>;

  public currentUser: IUser;

  private error: string;

  constructor(
    private readonly userService: UserService,
  ) {  }

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
    this.user
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(user => {
        this.currentUser = user;
      },
      error => {
        this.error = error;
      },
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
