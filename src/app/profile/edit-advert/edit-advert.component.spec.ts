import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvertComponent } from './edit-advert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../core/services/auth.service';
import { MockAuthService } from '../../core/services/auth.service.mock';
import { LoaderService } from '../../shared/services/loader.service';
import { MockLoaderService } from '../../shared/services/loader.service.mock';
import { ToastrService } from 'ngx-toastr';
import { CardService } from '../../features/home/services/card.service';
import { MockCardService } from '../../features/home/services/card.service.mock';

describe('EditAdvertComponent', () => {
  let component: EditAdvertComponent;
  let fixture: ComponentFixture<EditAdvertComponent>;

  const toastrService = {
    success: (
    ) => {},
    error: (
    ) => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdvertComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService,
        },
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
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
