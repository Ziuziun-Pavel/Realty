import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfig } from '../../../core/models/formConfig';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})

export class UserFormComponent implements OnInit {
  @Input() public formConfig: FormConfig = {
    title: '',
    submitted: false,
    loading: false,
  };

  @Output() public Submit = new EventEmitter<FormGroup>();

  public userForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        userSurname: [''],
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.checkPasswords('password', 'confirmPassword'),
      },
    );
  }

  public get formControls(): { [key: string]: AbstractControl; } {
    return this.userForm.controls;
  }

  public checkPasswords(
    controlName: string,
    matchingControlName: string,
  ) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public onSubmit(): void {
    console.log(this.userForm.get('userName'));
    this.formConfig.submitted = true;
    if (this.userForm.valid) {
      this.Submit.emit(this.userForm);
    }
  }

}
