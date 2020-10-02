import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingComponent } from '../../layout/shared/setting/setting.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (SettingComponent.logged) {
        return true;
      }
      else {
        const token = atob(window.localStorage.getItem('authToken'));

        if (token) {
          SettingComponent.logged = true;
          SettingComponent.authToken = token;
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }

        this.router.navigate(['login']);
        return false;
      }
  }

}
