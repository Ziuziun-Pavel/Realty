import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FlatPageComponent } from './flat-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CardType, ICard } from '../../../../../core/models/cards';
import { of } from 'rxjs';
import { CardService } from '../../../services/card.service';
import { MockCardService } from '../../../services/card.service.mock';

describe('PageComponent', () => {
  let component: FlatPageComponent;
  let fixture: ComponentFixture<FlatPageComponent>;
  let cardService: CardService;
  let MockCard: ICard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatPageComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: CardService,
          useClass: MockCardService,
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatPageComponent);
    component = fixture.componentInstance;
    cardService = fixture.debugElement.injector.get(CardService);
    MockCard = {
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
    };
    component.card = of(MockCard);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSellCardById from CardService', () => {
    const cardService = jasmine.createSpyObj('CardService', ['getSellCardById']);
    const getCardSpy = cardService.getSellCardById.and.returnValue(of(MockCard));
    fixture.detectChanges();
    expect(getCardSpy.calls.any).toBeTruthy();
  });

  it('should call getRentCardById from CardService', () => {
    const cardService = jasmine.createSpyObj('CardService', ['getRentCardById']);
    const getCardSpy = cardService.getRentCardById.and.returnValue(of(MockCard));
    fixture.detectChanges();
    expect(getCardSpy.calls.any).toBeTruthy();
  });

});
