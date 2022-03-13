import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListComponent } from './cards-list.component';
import { CardType, ICard } from '../../../../core/models/cards';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardsListComponent', () => {
  let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;
  let MockCardsArray: ICard[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListComponent);
    component = fixture.componentInstance;
    MockCardsArray = [
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
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const title = 'Результаты поиска:';
    const el = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(el.textContent).toEqual(title);
  });

});
