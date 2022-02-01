import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-adverts',
  templateUrl: './add-adverts.component.html',
  styleUrls: ['./add-adverts.component.scss']
})
export class AddAdvertsComponent implements OnInit {

  loading = false;

  submitted = false;

  addingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private userService: UserService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.addingForm = this.formBuilder.group(
      {
        typeOfRealty: ['', Validators.required],
        userSurname: ['', Validators.required],
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      }
    );
  }

  get formControls() { return this.addingForm.controls; }

  onSubmit(): void {
    this.submitted = true;
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  //   this.loading = true;
  //   this.userService.register(this.registerForm.value)
  //     .subscribe(
  //       ()=>{
  //         alert('Пользователь успешно зарегистрирован!!');
  //         this.router.navigate(['/login']);
  //       },
  //       (error)=>{
  //         this.toastr.error(error.error.message, 'Error');
  //         this.loading = false;
  //       },
  //     );
  }
}
