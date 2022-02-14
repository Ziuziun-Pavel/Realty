import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectedOption } from '../../../core/models/selectedOption';
import { map } from 'rxjs';
import { CardService } from '../../../features/home/services/card.service';
import { ICard } from '../../../core/models/cards';

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
  @Input() public options: SelectedOption[];

  public selectedOption: SelectedOption;

  private onChange: (_: any) => {};

  constructor(private readonly cardService: CardService) { }

  ngOnInit() {  }

  public writeValue() {
      this.selectedOption = this.options[0];
  }

  public registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  public changeSelectedOption(option: SelectedOption) {
    this.selectedOption = option;
    this.onChange(option);
  }

  public getFilteredArray() {
    return this.cardService.getAllCards().pipe(
      map(items => {
        return items.filter(item => item.type === this.selectedOption.value)
      })
    )
  }

  public registerOnTouched() { }

}
