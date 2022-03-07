import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CustomDropdownComponent } from './custom-dropdown.component';
import { SelectedOption } from '../../../core/models/selectedOption';
import { By } from '@angular/platform-browser';

describe('CustomDropdownComponent', () => {
  let component: CustomDropdownComponent;
  let fixture: ComponentFixture<CustomDropdownComponent>;
  let MockOption: SelectedOption[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDropdownComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownComponent);
    component = fixture.componentInstance;
    MockOption = [
      {
        state: 'Цена',
        value: '',
      },
      {
        state: 'до 50 000$',
        value: '50000',
      }, {
        state: 'до 150 000$',
        value: '150000',
      }, {
        state: 'до 300 000$',
        value: '300000',
      }, {
        state: 'до 600 000$',
        value: '600000',
      },
    ];
    component.selectedOption = MockOption[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render SelectedOption state', () => {
    const state = fixture.debugElement.query(By.css('#button-basic'));
    expect(state.nativeElement.textContent).toEqual(component.selectedOption.state)
  });

  it('should call changeSelectedOption method', fakeAsync(() => {
    let fnc = spyOn(component, 'changeSelectedOption');
    let button = fixture.debugElement.query(By.css('span'));
    button.triggerEventHandler('click',null);
    tick();
    fixture.detectChanges();
    expect(fnc.calls.any).toBeTruthy();
  }));

  it('should write value for selected option', () => {
    spyOn(component, 'writeValue');
    let value: SelectedOption = {
      state: 'Цена',
      value: ''
    };
    component.writeValue(value);
    expect(component.selectedOption).toEqual(value);
  });

});
