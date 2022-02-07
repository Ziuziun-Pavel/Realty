import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    if (this.authService.isUserAuthorised()) {
      return of(true);
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return of(false);
  }
}
