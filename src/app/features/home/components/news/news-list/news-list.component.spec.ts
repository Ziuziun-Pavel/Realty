import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { NewsService } from '../../../services/news.service';
import { MockNewsService } from '../../../services/news.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let newsService: NewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListComponent],
      providers: [
        {
          provide: NewsService,
          useClass: MockNewsService
        },
        ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    newsService = fixture.debugElement.injector.get(NewsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should call getNews method from NewsService', () => {
    const getNewsSpy = spyOn(newsService, 'getNews');
    expect(getNewsSpy.calls.any).toBeTruthy();
  });
});
