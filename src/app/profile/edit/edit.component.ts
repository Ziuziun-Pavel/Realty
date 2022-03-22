import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormConfig } from '../../core/models/formConfig';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { LoaderService } from '../../shared/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { TakeUntilDestroy } from '../../shared/decorators/take-until-destroy.decorator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

@TakeUntilDestroy
export class EditComponent implements OnDestroy {
  private componentDestroy: () => Observable<unknown>;

  public submitted = false;

  public loading = false;

  public formConfig: FormConfig = {
    title: 'Изменить профиль',
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
    this.userService.updateUser(userForm.value)
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(
        () => {
          this.loading = false;
          this.loaderService.hide();
          this.toastr.success('Ваш профиль успешно изменён', userForm.controls.userName.value + ',');
          this.router.navigate(['/details']);
        },
        (error) => {
          this.toastr.error(error.error.message, 'Ошибка');
          this.loading = false;
          this.loaderService.hide();
        },
      );
  }

  ngOnDestroy() { }
}
