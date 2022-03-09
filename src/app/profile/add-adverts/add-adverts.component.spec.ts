import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertsComponent } from './add-adverts.component';
import { ToastrService } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { CardService } from '../../features/home/services/card.service';
import { MockCardService } from '../../features/home/services/card.service.mock';
import { LoaderService } from '../../shared/services/loader.service';
import { MockLoaderService } from '../../shared/services/loader.service.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddAdvertsComponent', () => {
  let component: AddAdvertsComponent;
  let fixture: ComponentFixture<AddAdvertsComponent>;

  const toastrService = {
    success: (
    ) => {},
    error: (
    ) => {},
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertsComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: CardService,
          useClass: MockCardService,
        },
        {
          provide: LoaderService,
          useClass: MockLoaderService,
        },
        { provide: ToastrService, useValue: toastrService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
