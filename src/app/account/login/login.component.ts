import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

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
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      },
    );
  }

  get formControls() { return this.loginForm.controls; }

  public onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;

    this.authService.login(this.loginForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
      () => {
        alert('Добро пожаловать');
        this.router.navigate(['/']);
      },
      (error) => {
        this.toastr.error(error.error.message, 'Ошибка');
      }
    );
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
