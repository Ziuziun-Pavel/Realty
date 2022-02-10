import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true,
    },
  ],
})

export class CustomDropdownComponent implements OnInit, ControlValueAccessor {

  @Input() public selectedOption: string;
  @Input() public options: string[];

  onChange: (_: any) => {};

  constructor() { }

  ngOnInit() {

    // this.options = [
    //   'option 1',
    //   'option 2',
    //   'option 3',
    // ];

    //this.selectedOption = this.options[0];

  }


  writeValue(value: string) {
   // this.selectedOption = value;
  }

  registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  changeSelectedOption(option: string) {
    //this.selectedOption = option;
    this.onChange(option);
  }

  registerOnTouched() { }

}
