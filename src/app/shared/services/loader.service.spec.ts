import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LoaderService,
        },
      ],
    });
    loaderService = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(loaderService).toBeTruthy();
  });

});
