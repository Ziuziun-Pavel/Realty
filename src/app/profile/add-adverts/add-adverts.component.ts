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
        type: ['', Validators.required],
        price: ['', Validators.required],
        square: ['', Validators.required],
        street: ['ул.', Validators.required],
        metro: ['Ст.м. ', Validators.required],
        seller: ['', Validators.required],
        url: ['', Validators.required],
        floor: ['', Validators.required],
        maxFloor: ['', Validators.required],
        typeOfHouse: ['', Validators.required],
        numberOfRooms: ['', Validators.required],
        balcony: ['', Validators.required],
        heightOfCeiling: ['', Validators.required],
        yearOfBuilding: ['', Validators.required],
        telNumber: ['+375 ', Validators.required],
        description: ['', Validators.required],
      }
    );
  }

  get formControls() { return this.addingForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.addingForm.invalid) {
      return;
    }
     this.loading = true;
    this.userService.addNewCard(this.addingForm.value)
      .subscribe(
        ()=>{
          alert('Объявление добавлено!!');
          this.router.navigate(['/details']);
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Error');
          this.loading = false;
        },
      );
  }
}
