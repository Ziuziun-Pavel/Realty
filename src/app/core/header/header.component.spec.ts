import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MockAuthService } from '../services/auth.service.mock';
import { AuthService } from '../services/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService,
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should call isAuthorized from AuthService', () => {
    const spy = spyOn(authService, 'isUserAuthorised');
    component.isAuthorized();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should call isAdmin from AuthService', () => {
    const spy = spyOn(authService, 'isAdmin');
    component.isAdmin();
    expect(spy.calls.any()).toBeTruthy();
  });


  it('should call signOut', () => {
    const spy = spyOn(authService, 'logout');
    let button = fixture.debugElement.nativeElement.querySelector('[data-btn="signout"]');
    button.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

});
