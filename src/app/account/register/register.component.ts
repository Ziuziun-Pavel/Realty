import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

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
    private router:Router,
    private readonly authService: AuthService,
    private toastr: ToastrService,
  ) { }

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

  get formControls() { return this.registerForm.controls; }

  public onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.authService.register(this.registerForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        ()=>{
          this.loading = false;
          alert('Пользователь успешно зарегистрирован!!');
          this.router.navigate(['/login']);
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Ошибка');
          this.loading = false;
        },
      );
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
