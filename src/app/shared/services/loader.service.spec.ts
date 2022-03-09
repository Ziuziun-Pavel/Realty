import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { MockLoaderService } from './loader.service.mock';

describe('LoaderService', () => {
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LoaderService,
          useClass: MockLoaderService,
        },
      ],
    });
    loaderService = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(loaderService).toBeTruthy();
  });

  it('show() should emit data for isLoading', (done) => {
    const loaderServiceSpy = jasmine.createSpyObj('loaderService', ['show']);

    loaderServiceSpy.show();
    expect(loaderServiceSpy.show).toHaveBeenCalled();
    done();
  });

  it('hide() should emit data for isLoading', (done) => {
    const loaderServiceSpy = jasmine.createSpyObj('loaderService', ['hide']);

    loaderServiceSpy.hide();
    expect(loaderServiceSpy.hide).toHaveBeenCalled();
    done();
  });

});
