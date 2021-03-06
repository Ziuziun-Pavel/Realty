import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CardType, ICard } from '../../../../../core/models/cards';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockCard: ICard = {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CardComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = mockCard;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display card street', () => {
    const cardStreet = fixture.nativeElement.querySelector('.item-street');
    expect(cardStreet.textContent).toEqual(mockCard.street);
  });

  it('should display card region', () => {
    const cardRegion = fixture.nativeElement.querySelector('.item-location');
    expect(cardRegion.textContent).toEqual(mockCard.region);
  });

  it('should test if the route is correct', () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement
      .getAttribute('href');
    expect(href).toEqual('/page/sell/1s');
  });

});
