import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  SimpleChanges
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CustomDropdownComponent implements ControlValueAccessor {
  @Input() public options: SelectedOption[];

  public selectedOption: SelectedOption;

  constructor(private readonly cd: ChangeDetectorRef) {
  }

  private onChange: (_: any) => {};

  public writeValue(value: SelectedOption) {
    this.selectedOption = value;
    this.cd.markForCheck();
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
