import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['register']);
    this.registerForm = this.formBuilder.group(
      {
      userName: ['', Validators.required],
      userSurname: ['', Validators.required],
      userEmail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      }
    );
  }

}
