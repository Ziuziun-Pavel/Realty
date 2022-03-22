import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService } from './services/filter.service';
import { MockFilterService } from './services/filter.service.mock';
import { MockCardService } from './services/card.service.mock';
import { CardService } from './services/card.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cardService: CardService;

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
