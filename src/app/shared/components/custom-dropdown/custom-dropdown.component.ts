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
  @Input() public options: string[];

  public selectedOption: string;

  private onChange: (_: any) => {};

  constructor() { }

  ngOnInit() {  }

  public writeValue() {
      this.selectedOption = this.options[0];
  }

  public registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  public changeSelectedOption(option: string) {
    this.selectedOption = option;
    this.onChange(option);
  }

  public registerOnTouched() { }

}
