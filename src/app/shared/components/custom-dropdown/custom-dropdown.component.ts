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

  ngOnInit() {  }

  writeValue(value: string) {
    if(this.selectedOption === value){
      this.selectedOption = this.options[0];
    }
  }

  registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  changeSelectedOption(option: string) {
    this.selectedOption = option;
    this.onChange(option);
  }

  registerOnTouched() { }

}
