import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  private user = JSON.parse(localStorage.getItem('logUser') || '{}');

  public loading = false;

  public submitted = false;

  public editForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private router:Router,
    private readonly userService: UserService,
    private readonly authService: AuthService,
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

  public get formControls() { return this.editForm.controls; }

  public onSubmit(): void {
    if (this.editForm.invalid) {
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.userService.keepChanges(this.editForm.value)
      .subscribe(
        ()=>{
          this.toastr.success('Ваш профиль успешно изменён', this.user.userName + ',');
          this.router.navigate(['/details']);
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Ошибка');
          this.loading = false;
        },
      );
  }
}
