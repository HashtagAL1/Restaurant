import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {OrderService} from "../services/order.service";
import {NotifierService} from "angular-notifier";
import {AuthorizationService} from "../services/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class CanViewOrderDetailsGuard implements CanActivate {

  constructor(public auth: AuthorizationService,
              public notifier: NotifierService,
              public router: Router,
              public orderService: OrderService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const orderId = next.url[1].path;
    return new Observable<boolean>((observer) => {
      this.orderService.getOrder(orderId).subscribe((res) => {
        if (this.auth.getUsername() === res.order.username || this.auth.isAdmin() || this.auth.isDeliverer()) {
          observer.next(true);
        } else {
          this.notifier.notify('warning', 'You don\'t have the permissions to access this page');
          this.router.navigate(['/menu']);
          observer.next(false);
        }
        observer.complete();
      });
    });
  }
}
