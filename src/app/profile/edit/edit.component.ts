import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { checkPasswords } from '../../shared/utilits/checkPassword';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  loading = false;

  submitted = false;

  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    public userService: UserService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group(
      {
        userName: [this.userService.getLoggedUser().userName],
        userSurname: [this.userService.getLoggedUser().userSurname],
        userEmail: [this.userService.getLoggedUser().userEmail, [Validators.email]],
        password: [this.userService.getLoggedUser().password, [Validators.minLength(6)]],
        confirmPassword: [this.userService.getLoggedUser().confirmPassword],
      },
      {
        validator: checkPasswords('password', 'confirmPassword'),
      },
    );
  }

  get formControls() { return this.editForm.controls; }

  onSubmit(): any {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.keepChanges(this.editForm.value)
      .subscribe(
        ()=>{
          this.toastr.success('Ваш профиль успешно изменён', this.userService.getLoggedUser().userName + ',');
          this.router.navigate(['/details']);
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Ошибка');
          this.loading = false;
        },
      );
  }
}
