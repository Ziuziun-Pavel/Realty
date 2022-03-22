import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsItem } from 'src/app/core/models/news';

import { NewsCardComponent } from './news-card.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;
  let mockNewsCard: NewsItem = {
    'id': 'n1',
    'url': '/assets/img/news/9291bf4aa5acaab1cf4dd58f5fdf685f.jpg',
    'title': 'С видом на бронзового бобра! На аукцион выставили квартиру в старинном доме с классным расположением (стоит 12 тысяч долларов)',
    'author': 'Екатерина Апарина',
    'date': '12.01.2022',
    'description': 'В Бобруйске на электронные торги попала необычная квартира. Жилье принадлежит местной эксплуатационной организации и находится в старинном кирпичном доме прямо в центре города. Состояние у квартиры, прямо скажем, неприглядное, но зато цена — весьма приятная.',
    'additionalInfo': 'Расположена квартира в одноэтажном кирпичном доме на улице Карла Маркса, 62−1. Окружение дома, построенного в начале прошлого века — топовое.\n Рядом находится центральный бобруйский рынок и главное − пешеходная улица Социалистическая. На ней можно найти не только огромное количество сувенирных лавочек и кафешек, но и самую фотографируемую достопримечательность города — бронзового Бобра. Поблизости также находится площадь Победы с большим сквером, областной драматический театр имени Дунина-Марцинкевича и городской музей.\n Площадь квартиры — всего 33,2 квадратного метра. Судя по фотографиям, жилье давно пустует и требует ремонта. В местных новостях за 2019 год, есть упоминание о том, что в квартире был пожар. На снимках, кстати, можно заметить обгоревший санузел. Однако отмечается, что в доме есть все коммуникации: электричество, отопление, канализация, водопровод и газоснабжение.\nУчитывая месторасположение жилья, вместо обычных соседей у будущих жильцов будут общественные заведения. Так, в одном доме с квартирой уже располагается аптека и кафе «Арбатъ». Возможно, будущий владелец также решит перевести квартиру в нежилой фонд.\n\nНачальная стоимость объекта — 31 тысяча рублей, или 11,9 тысяч долларов. Электронные торги, которые пройдут на площадке «БелЮрОбеспечение», назначены на 8 февраля.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NewsCardComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    component.card = mockNewsCard;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display card title', () => {
    const cardStreet = fixture.nativeElement.querySelector('.text');
    expect(cardStreet.textContent).toEqual(mockNewsCard.title);
  });

  it('should test if the route is correct', () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement
      .getAttribute('href');
    expect(href).toEqual('/news/n1');
  });

});
