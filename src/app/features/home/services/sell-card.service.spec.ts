import { TestBed } from '@angular/core/testing';

import { SellCardService } from './sell-card.service';

describe('CardService', () => {
  let service: SellCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
