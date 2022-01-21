import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../../core/services/authentication.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private authenticationService : AuthenticationService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        userEmail: ['', [Validators.required,Validators.email]],
        password: ['', Validators.required],
      }
    );
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.formControls.userEmail.value, this.formControls.password.value)
      .subscribe(
        () => {
          alert("yaaaaaa")
          this.router.navigate(['/']);
        },
        error => {
          alert("foooooo")
          this.toastr.error(error.error.message, 'Error');
          this.loading = false;
        });
  }
}

