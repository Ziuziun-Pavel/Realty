import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/role.rs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const roles = route.data.roles as Role[];

    if (this.authService.isUserAuthorised()) {
      return of(true);
    }

    if (roles ) {
      return of(true)
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return of(false);
  }
}
