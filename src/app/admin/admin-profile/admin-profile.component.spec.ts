import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileComponent } from './admin-profile.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { MockAuthService } from '../../core/services/auth.service.mock';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminProfileComponent', () => {
  let component: AdminProfileComponent;
  let fixture: ComponentFixture<AdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AdminProfileComponent ],
      providers: [{
        provide: AuthService,
        useClass: MockAuthService,
      }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
