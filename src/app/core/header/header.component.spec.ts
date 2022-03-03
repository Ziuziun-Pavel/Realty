import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MockAuthService } from '../services/auth.service.mock';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/role.rs';
import { IUser } from '../models/user';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let MockUser: IUser;
  let MockAdmin: IUser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);

    MockUser = {
      id: '1sdh34hn',
      userName: 'John',
      userSurname: 'Smith',
      userEmail: 'asd@gmail.com',
      password: '12345678',
    };
    MockAdmin =   {
      id: 'admin1',
      userName: 'Admin',
      userSurname: 'Admin',
      userEmail: 'admisitrator1@gmail.com',
      role: Role.Admin,
      password: '12345678',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should call isAuthorized from AuthService', () => {
    const spy = spyOn(authService, 'isUserAuthorised').and.returnValue(true);
    component.isAuthorized();
    expect(spy.calls.any()).toBeTruthy()
  });

  it('should call isAdmin from AuthService', () => {
    const spy = spyOn(authService, 'isAdmin').and.returnValue(true);
    component.isAdmin();
    expect(spy.calls.any()).toBeTruthy()
  });

  it('should call signOut', fakeAsync(() => {
    spyOn(component, 'signOut');
    let button = fixture.debugElement.nativeElement.querySelector('.out');
    button.click();
    tick();
    fixture.detectChanges()
    expect(component.signOut).toHaveBeenCalled();
  }));

  it('should check if the user is authorized', () => {
    component.isAuthorized();
    expect(MockUser).toBeDefined();
  });

  it('should check for admin', () => {
    component.isAdmin();
    expect(MockAdmin).toBeDefined();
  });


});
