import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {

    if (this.authService.isAdmin()) {
      return of(true);
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return of(false);
  }

}
