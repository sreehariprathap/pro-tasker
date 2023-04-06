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
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   const commonRoutes = this.pages.commonRoutes;
  //   const authRoutes = this.pages.authRoutes;
  //   const accessRoutes = this.pages.accessRoutes;
  //   const isToken = this.authService.isLoggedIn;
  //   this.url = state.url;

  //   if (commonRoutes.some(this.checkUrl)) {
  //     return true;
  //   }

  //   if (!isToken && authRoutes.some(this.checkUrl)) {
  //     return true;
  //   } else if (isToken) {
  //     if (accessRoutes['all'].some(this.checkUrl)) {
  //       return true;
  //     } else {
  //       this.router.navigate(['/home']);
  //       return true;
  //     }
  //   }

  //   this.router.navigate(['/']);
  //   return false;
  // }

  // private absoluteUrl(path: string): string {
  //   if (!path) {
  //     return path;
  //   }

  //   const url = path.match(/^\//) ? path : `/${path}`;
  //   return url.match(/\/$/) ? url.slice(0, -1) : url;
  // }

  // private readonly checkUrl = (r: any): boolean => this.url === this.absoluteUrl(r) || !!this.url.match(new RegExp(`^${this.absoluteUrl(r)}`));
}
