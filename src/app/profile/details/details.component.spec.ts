import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { UserService } from '../../core/services/user.service';
import { MockUserService } from '../../core/services/user.service.mock';
import { IUser } from '../../core/models/user';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        {
          provide: UserService,
          useClass: MockUserService,
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('should call getLoggedUser from userService', fakeAsync(() => {
    let loggedUser: IUser = {
      id: 'eyb21gby',
      userName: 'John',
      userSurname: 'Smith',
      userEmail: 'asd@gmail.com',
    };
    spyOn(userService, 'getLoggedUser').and.returnValue(of(loggedUser));
    userService.getLoggedUser().subscribe((value) => {
      component.currentUser = value;
    });
    tick(0);
    fixture.detectChanges();
    expect(component.currentUser).toEqual(loggedUser);
  }));

});
