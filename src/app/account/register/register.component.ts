import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public loading = false;

  public submitted = false;

  public registerForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private router: Router,
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        userSurname: ['', Validators.required],
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.authService.checkPasswords('password', 'confirmPassword'),
      },
    );
  }

  public get formControls() {
    return this.registerForm.controls;
  }

  public onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.loaderService.show();
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
        }
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
