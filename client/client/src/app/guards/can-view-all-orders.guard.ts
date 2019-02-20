import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {NotifierService} from "angular-notifier";
import {AuthorizationService} from "../services/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class CanViewAllOrdersGuard implements CanActivate {

  constructor(public auth: AuthorizationService,
              public notifier: NotifierService,
              public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isAdmin() && !this.auth.isDeliverer() && !this.auth.isStaff()) {
        this.notifier.notify('warning', 'You don\'t have the permissions to access this page');
        this.router.navigate(['/']);
        return false;
    }
    return true;
  }
}
