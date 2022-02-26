import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel.component';
import { CardService } from '../../services/card.service';
import { MockCardService } from '../../services/card.service.mock';
import { FormBuilder } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { MockFilterService } from '../../services/filter.service.mock';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPanelComponent ],
      providers: [
        FormBuilder,
        {
          provide: FilterService,
          useClass: MockFilterService
        },
        {
          provide: CardService,
          useClass: MockCardService
        },
        ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
