import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ProfileDetailsComponent } from './profile-details.component';
import { AuthService } from '../../../core/services/auth.service';
import { MockAuthService } from '../../../core/services/auth.service.mock';
import { IUser } from '../../../core/models/user';
import { By } from '@angular/platform-browser';

describe('ProfileDetailsComponent', () => {
  let component: ProfileDetailsComponent;
  let fixture: ComponentFixture<ProfileDetailsComponent>;
  let authService: AuthService;
  let MockUser: IUser;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsComponent ],
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
    fixture = TestBed.createComponent(ProfileDetailsComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    MockUser = {
      id: '1sd78sdf',
      userName: 'John',
      userSurname: 'Smith',
      userEmail: 'asd@gmail.com',
      password: '1234567',
    };
    component.currentUser = MockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render title', () => {
    const title = fixture.debugElement.query(By.css('.title-name'));
    expect(title.nativeElement.textContent).toEqual(MockUser.userName + ' ' + MockUser.userSurname );
  });

  it('should go to url with adverts',  () => {
    let advertsLink = fixture.debugElement.query(By.css('.adverts')).nativeElement
      .getAttribute('routerLink');

    expect(advertsLink).toEqual('/advertsList');
  });

  it('should call isAdmin from AuthService', () => {
    const spy = spyOn(authService, 'isAdmin');
    component.isAdmin();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should call signOut', fakeAsync(() => {
    spyOn(authService, 'logout');
    component.deleteAccount();
    tick();
    fixture.detectChanges();
    expect(authService.logout).toHaveBeenCalled();
  }));

});
