import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Pages } from '../configs/app.pages';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  url!: string;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router,
    private readonly pages: Pages
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.getIsLoggedIn()) {
      if (state.url === '/' || state.url === '/login') {
        return this.router.parseUrl('/dashboard');
      } else {
        return true;
      }
    } else {
      if (state.url === '/' || state.url === '/login') {
        return true;
      } else {
        return this.router.parseUrl('/login');
      }
    }
  }
}
