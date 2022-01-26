import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { checkPasswords } from '../../shared/utilits/checkPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading = false;

  submitted = false;

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private userService: UserService,
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
        validator: checkPasswords('password', 'confirmPassword'),
      },
    );
  }

  get formControls() { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value)
      .subscribe(
        ()=>{
          alert('User Registered successfully!!');
          this.router.navigate(['/login']);
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Error');
          this.loading = false;
        },
      );
  }
}
