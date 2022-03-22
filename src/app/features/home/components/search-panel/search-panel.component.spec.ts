import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel.component';
import { CardService } from '../../services/card.service';
import { MockCardService } from '../../services/card.service.mock';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { MockFilterService } from '../../services/filter.service.mock';
import {
  CustomDropdownComponent,
} from '../../../../shared/components/custom-dropdown/custom-dropdown.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SearchPanelComponent, CustomDropdownComponent],
      providers: [
        FormBuilder,
        {
          provide: FilterService,
          useClass: MockFilterService,
        },
        {
          provide: CardService,
          useClass: MockCardService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should emit event when the user clicked search button ', (() => {
    spyOn(component.filtered, 'emit');
    const button = fixture.debugElement.query(By.css('.btn-search'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.filtered.emit)
      .toBeTruthy();
  }));

  it('should call the onReset ', (() => {
    const fnc = spyOn(component, 'onReset');
    const button = fixture.debugElement.query(By.css('.btn-reset'));

    button.triggerEventHandler('click', null);
    expect(fnc)
      .toHaveBeenCalled();
  }));

  it('should show loader when the user click search button', (() => {
    const filterService = jasmine.createSpyObj('FilterService', ['show']);
    const button = fixture.debugElement.query(By.css('.btn-search'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(filterService.show.calls.any)
      .toBeTruthy();
  }));

  it('should correctly reset form', () => {
    const searchControl = component.searchingForm.controls.search;
    searchControl.setValue('adsa');
    component.searchingForm.reset();
    expect(searchControl.value)
      .toBeFalsy();
  });

  it('should hide slider when the server gave a response', (() => {
    const filterService = jasmine.createSpyObj('FilterService', ['hide']);
    const button = fixture.debugElement.query(By.css('.btn-reset'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(filterService.hide.calls.any)
      .toBeTruthy();
  }));

});
