import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {NotifierService} from "angular-notifier";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {Observable, Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit, OnDestroy {

  orders: any;
  sub: Subscription;

  constructor(public orderService: OrderService,
              public notifier: NotifierService) {
  }

  ngOnInit() {
    this.sub = Observable.interval(3000)
      .startWith(0)
      .switchMap(() => this.orderService.getAllOrders())
      .subscribe((res) => {
        this.orders = res.orders;
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
