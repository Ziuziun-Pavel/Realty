import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { LoaderService } from '../../shared/services/loader.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  private user = JSON.parse(localStorage.getItem('logUser') || '{}');

  public loading = false;

  public submitted = false;

  public editForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router:Router,
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService,
    private readonly toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group(
      {
        userName: [this.user.userName, [Validators.required]],
        userSurname: [this.user.userSurname],
        userEmail: [this.user.userEmail, [Validators.required, Validators.email]],
        password: [this.user.password, [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.authService.checkPasswords('password', 'confirmPassword'),
      },
    );
  }

  public get formControls():{ [key: string]: AbstractControl; } { return this.editForm.controls; }

  public onSubmit(): void {
    if (this.editForm.invalid) {
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.loaderService.show();
    this.userService.keepChanges(this.editForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        ()=>{
          this.loading = false;
          this.loaderService.hide();
          this.toastr.success('Ваш профиль успешно изменён', this.user.userName + ',');
          this.router.navigate(['/details']);
        },
        (error)=>{
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
