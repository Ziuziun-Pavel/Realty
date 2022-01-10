import { TestBed } from '@angular/core/testing';

import { RentCardService } from './rent-card.service';

describe('RentCardsService', () => {
  let service: RentCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
