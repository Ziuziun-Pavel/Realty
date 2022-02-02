import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public submitted = false;

  public loginForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService,
    private router: Router,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      },
    );
  }

  public get formControls() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    this.loaderService.show();

    this.authService.login(this.loginForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        () => {
          this.loaderService.hide();
          alert('Добро пожаловать');
          this.router.navigate(['/']);
        },
        () => {
          this.loaderService.hide();
          this.toastr.error('Неверный логин или пароль');
        },
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
