import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectedOption } from '../../../core/models/selectedOption';

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

export class CustomDropdownComponent implements ControlValueAccessor {
  @Input() public options: SelectedOption[];

  public selectedOption: SelectedOption;

  private onChange: (_: any) => {};

  public writeValue(value: SelectedOption) {
    this.selectedOption = value;
  }

  public registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  public changeSelectedOption(option: SelectedOption) {
    this.selectedOption = option;
    this.onChange(option);
  }

  public registerOnTouched() { }

}
