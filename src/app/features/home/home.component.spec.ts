import { HomeComponent } from './home.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FilterService } from './services/filter.service';
import { MockFilterService } from './services/filter.service.mock';
import { MockCardService } from './services/card.service.mock';
import { CardService } from './services/card.service';
import { Observable, of } from 'rxjs';
import { CardType, ICard } from '../../core/models/cards';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cardService: CardService;
  let MockCards: ICard[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    cardService = fixture.debugElement.injector.get(CardService);
    MockCards = [
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
      {
        'id': '2s',
        'url': '../../assets/img/flatsForSelling/1627040454_32-almode_ru-p-dizainerskie-intereri-kvartir-33.jpg',
        'price': 300000,
        'square': 54,
        'street': 'пр-т Мира, д.13.',
        'region': 'Брестская',
        'seller': 'Кристина',
        'numberOfRooms': 2,
        'floor': 2,
        'maxFloor': 9,
        'typeOfHouse': 'каркасно-блочный',
        'balcony': 'лоджия застекленная',
        'heightOfCeiling': 3.2,
        'yearOfBuilding': 2009,
        'telNumber': '+375-44-445-58-02',
        'type': CardType.sell,
        'description': 'Остекление: заменено во всей квартире на профиль из анодированного алюминия Alutech, фурнитура Savio Италия, пакет 48мм. Остекление лоджии теплое, закаленное, атермальное.\n\nВходная дверь: усиленная 300 кг, 2 замка Cisa Италия, Multilock mt-5 Israel.\n\nКондиционирование: энерго-эффективная мульти-сплит-система на 3 комнаты Daikin Япония; система приточной вентиляции.\n\nПодогрев полов: шесть зон нагрева Devi Дания, управление через Devismart App.\n\nКухня: производитель Stosa Cucine Италия, техника встроенная с тач-панелями Siemens: полноразмерный духовой шкаф плюс пароварка плюс СВЧ три в одном, кофемашина, компактный духовой шкаф плюс пароварка два в одном, два шкафа для нагрева посуды, индукционная варочная стеклокерамическая панель, посудомоечная машина Zeolite; холодильник Liebherr Premium biofresh (три нулевые зоны и одна фреш зона), морозильник Liebherr, вытяжка островного типа Elica Италия. Мойка и смеситель Blanco SteelArt Германия, рабочая поверхность – кварц.',
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should call getCard() and return cards', (done) => {

    cardService.getAllCards()
      .subscribe((items) => {
        expect(component.filteredCards)
          .toEqual(items);
      });

    done();
  });

});
