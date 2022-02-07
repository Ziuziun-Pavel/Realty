import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../shared/services/loader.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-adverts',
  templateUrl: './add-adverts.component.html',
  styleUrls: ['./add-adverts.component.scss']
})
export class AddAdvertsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public loading = false;

  public submitted = false;

  public addingForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router:Router,
    private readonly userService: UserService,
    private readonly loaderService: LoaderService,
    private readonly toastr: ToastrService,
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

  get formControls(): {[key: string]: AbstractControl} { return this.addingForm.controls; }

  onSubmit(): void {
    if (this.addingForm.invalid) {
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.loaderService.show();
    this.userService.addNewCard(this.addingForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        ()=>{
          this.loading = false;
          this.loaderService.hide();
          alert('Объявление добавлено!!');
          this.router.navigate(['/details']);
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Error');
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
