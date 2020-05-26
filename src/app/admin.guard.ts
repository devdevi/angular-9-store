import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/internal/operators';

import { AuthService } from './core/services/auth/auth.service';




@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    /* Inyecciones de dependencias  */
    private authService: AuthService,
    private router: Router,
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      tap(user => console.log(user)),
      map(user => user ? true : false),
      tap(hastUser => !hastUser ? this.router.navigate(['/auth/login']) : '')
    );
  }

}
