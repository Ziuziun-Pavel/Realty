import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormConfig } from '../../core/models/formConfig';
import { Observable, takeUntil } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { LoaderService } from '../../shared/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { TakeUntilDestroy } from '../../shared/decorators/take-until-destroy.decorator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

@TakeUntilDestroy
export class RegisterComponent implements OnDestroy {
  private componentDestroy: () => Observable<unknown>;

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
  ) {
  }

  public onSubmit(userForm: FormGroup): void {
    this.loading = true;
    this.loaderService.show();
    this.authService.register(
      userForm.controls.userName.value,
      userForm.controls.userSurname.value,
      userForm.controls.userEmail.value,
      userForm.controls.password.value,
    )
      .pipe(takeUntil(this.componentDestroy()))
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

  ngOnDestroy() {  }
}
