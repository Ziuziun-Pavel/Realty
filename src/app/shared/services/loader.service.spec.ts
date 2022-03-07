import { fakeAsync, flush, TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { MockLoaderService } from './loader.service.mock';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LoaderService,
          useClass: MockLoaderService
        },
      ]
    });
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



});
