import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormConfig } from '../../core/models/formConfig';
import { Subject, takeUntil } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { LoaderService } from '../../shared/services/loader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public submitted = false;

  public loading = false;

  public formConfig: FormConfig = {
    title: 'Создать аккаунт',
    submitted: this.submitted,
    loading: this.loading,
  };

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly loaderService: LoaderService,
    private readonly toastr: ToastrService,
    private readonly dc: ChangeDetectorRef
  ) {
  }

  ngOnInit() {  }

  public onSubmit(userForm: FormGroup): void {
    this.loading = true;
    this.loaderService.show();
    this.authService.register(
      userForm.controls.userName.value,
      userForm.controls.userSurname.value,
      userForm.controls.userEmail.value,
      userForm.controls.password.value,
    )
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        () => {
          this.loading = false;
          this.loaderService.hide();
          alert('Пользователь успешно зарегистрирован!!');
          this.router.navigate(['/login']);
        },
        (error) => {
          this.toastr.error(error.error.message, 'Ошибка');
          this.loading = false;
          this.loaderService.hide();
        },
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
