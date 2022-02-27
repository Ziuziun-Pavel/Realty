import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  constructor(private readonly authService: AuthService) { }

  public isAuthorized() {
    return this.authService.isUserAuthorised();
  }

  public signOut() {
    return this.authService.logout();
  }

}
