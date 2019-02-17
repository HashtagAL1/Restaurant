import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {NotifierService} from "angular-notifier";
import {AuthorizationService} from "../services/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class ModeratorGuard implements CanActivate {

  constructor(public auth: AuthorizationService,
              public notifier: NotifierService,
              public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isModerator()) {
        this.notifier.notify('warning', 'You don\'t have the permissions to access this page');
        this.router.navigate(['/menu']);
        return false;
    }
    return true;
  }
}
