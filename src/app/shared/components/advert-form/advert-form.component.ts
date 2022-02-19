import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormConfig } from '../../../core/models/formConfig';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.scss'],
})
export class AdvertFormComponent implements OnInit {
  @Input() public formConfig: FormConfig = {
    title: '',
    submitted: false,
    loading: false,
  };

  @Output() public Submit = new EventEmitter<FormGroup>();

  public advertForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.advertForm = this.formBuilder.group(
      {
        type: ['', Validators.required],
        price: ['', Validators.required],
        square: ['', Validators.required],
        street: ['', Validators.required],
        region: ['', Validators.required],
        seller: ['', Validators.required],
        url: ['', Validators.required],
        floor: ['', Validators.required],
        maxFloor: ['', Validators.required],
        typeOfHouse: ['', Validators.required],
        numberOfRooms: ['', Validators.required],
        balcony: ['', Validators.required],
        heightOfCeiling: ['', Validators.required],
        yearOfBuilding: ['', Validators.required],
        telNumber: ['', Validators.required],
        description: ['', Validators.required],
      },
    );

  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.advertForm.controls;
  }

  public onSubmit(): void {
    this.formConfig.submitted = true;
    if (this.advertForm.valid) {
      this.Submit.emit(this.advertForm);
    }
  }

}
