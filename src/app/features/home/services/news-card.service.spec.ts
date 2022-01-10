import { TestBed } from '@angular/core/testing';

import { NewsCardService } from './news-card.service';

describe('NewsCardService', () => {
  let service: NewsCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
