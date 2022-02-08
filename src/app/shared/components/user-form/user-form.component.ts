import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoaderService } from '../../services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormConfig } from '../../../core/models/formConfig';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  private user = JSON.parse(localStorage.getItem('logUser') || '{}');

  public loading = false;

  public submitted = false;

  public userForm: FormGroup;

  @Input() formConfig: FormConfig = {
    title: '',
    register: true,
    edit: true,
  };

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly loaderService: LoaderService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        userSurname: ['', Validators.required],
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.checkPasswords('password', 'confirmPassword'),
      },
    );
  }

  public get formControls(): { [key: string]: AbstractControl; } {
    return this.userForm.controls;
  }

  public checkPasswords(
    controlName: string,
    matchingControlName: string,
  ) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.loading = true;
    this.loaderService.show();
    if (this.formConfig.register) {
      this.authService.register(
        this.formControls.userName.value,
        this.formControls.userSurname.value,
        this.formControls.userEmail.value,
        this.formControls.password.value,
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
    } else {
      this.userService.updateUser(this.userForm.value)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
          () => {
            this.loading = false;
            this.loaderService.hide();
            this.toastr.success('Ваш профиль успешно изменён',this.formControls.userName.value + ',');
            this.router.navigate(['/details']);
          },
          (error) => {
            this.toastr.error(error.error.message, 'Ошибка');
            this.loading = false;
            this.loaderService.hide();
          },
        );
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
