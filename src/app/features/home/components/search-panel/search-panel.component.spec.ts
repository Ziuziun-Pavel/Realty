import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel.component';
import { CardService } from '../../services/card.service';
import { MockCardService } from '../../services/card.service.mock';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { MockFilterService } from '../../services/filter.service.mock';
import { CardType, ICard } from '../../../../core/models/cards';
import {
  CustomDropdownComponent
} from '../../../../shared/components/custom-dropdown/custom-dropdown.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;
  let filterService: FilterService;
  let MockCard: ICard[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,ReactiveFormsModule],
      declarations: [ SearchPanelComponent, CustomDropdownComponent ],
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
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    filterService = fixture.debugElement.injector.get(FilterService);
    MockCard = [
      {
        'id': '1s',
        'url': '../../assets/img/flatsForSelling/1617587576_17-p-stil-kontemporari-v-interere-kvartiri-18.jpg',
        'price': 450000,
        'square': 76,
        'street': 'пр-т Роккоссовского 45',
        'region': 'Минская',
        'seller': 'Марина',
        'numberOfRooms': 3,
        'floor': 12,
        'maxFloor': 14,
        'typeOfHouse': 'каркасно-блочный',
        'balcony': '2 лоджии застекленные',
        'heightOfCeiling': 2.5,
        'yearOfBuilding': 2005,
        'telNumber': '+375-44-543-12-00',
        'type': CardType.sell,
        'description': 'К приобретению доступна квартира 76 м.кв. со свободной планировкой которая располагается в жилом комплексе премиум-класса «Олимпик Парк» (дом 13) на пересечении улиц Тимирязева и Ратомской рядом с водохранилищем Дрозды. Жилой комплекс прилегает к республиканскому заказнику «Лебяжий».\n\n«Олимпик Парк» — тихий уголок в одном из самых живописных и наименее заселенных мест Минска. Каждая деталь малоэтажного квартала премиум-класса создана, чтобы дарить комфорт. Дома ЖК «Олимпик Парк» образуют уютный двор с изобилием зелени и прогулочными местами для спокойного семейного отдыха. Самые активные оценят наличие велосипедных дорожек рядом с собственным домом.',
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const searchInput = component.searchingForm.controls.search;
    searchInput.setValue('asdas');
    expect(searchInput).toBeTruthy();
  });

  it('should call the onSearch ', (() => {
    const fnc = spyOn(component, 'onSearch');
    const button = fixture.debugElement.query(By.css('.btn-search'));

    button.triggerEventHandler('click',null);
    expect(fnc).toHaveBeenCalled();
  }));

  it('should call the onReset ', (() => {
    const fnc = spyOn(component, 'onReset');
    const button = fixture.debugElement.query(By.css('.btn-reset'));

    button.triggerEventHandler('click',null);
    expect(fnc).toHaveBeenCalled();
  }));

  it('should correctly @Output filteredCards', (() => {
    spyOn(component.filtered, 'emit');
    const button = fixture.debugElement.query(By.css('.btn-search'));
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(component.filtered.emit).toBeTruthy();
  }));

  it('should correctly call filterCards() method from filterService', (() => {
    const filterCardsSpy = spyOn(filterService, 'filterCards');
    const button = fixture.debugElement.query(By.css('.btn-search'));
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(filterCardsSpy.calls.any).toBeTruthy();
  }));

  it('should correctly call show() method from filterService', (() => {
    const filterService = jasmine.createSpyObj('FilterService', ['show']);
    const button = fixture.debugElement.query(By.css('.btn-search'));
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(filterService.show.calls.any).toBeTruthy();
  }));

  it('should reset form',  () => {
    const searchControl = component.searchingForm.controls.search;
    searchControl.setValue('adsa');
    component.searchingForm.reset();
    expect(searchControl.value).toBeFalsy();
  });

  it('should correctly call hide() method from filterService', (() => {
    const filterService = jasmine.createSpyObj('FilterService', ['hide']);
    const button = fixture.debugElement.query(By.css('.btn-reset'));
    button.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(filterService.hide.calls.any).toBeTruthy();
  }));

});
