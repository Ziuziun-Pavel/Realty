import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClient } from '@angular/common/http';
import { MockNewsService } from './news.service.mock';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        {
          provide: NewsService,
          useClass: MockNewsService
        }
      ]
    });
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
