import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {NotifierService} from "angular-notifier";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  order: any;
  routeSub: Subscription;
  orderSub: Subscription;

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              public orderService: OrderService,
              public notifier: NotifierService) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.orderSub = this.orderService.getOrder(params.orderId).subscribe((res) => {
        if (!res.success) {
          this.notifier.notify('info', res.message);
          this.router.navigate(['/menu']);
          return;
        }
        this.order = res.order;
      });
    });
  }

  getReceiveType() {
    if (this.order.location === 'delivery') {
        return `Delivery to ${this.order.address}`;
    }
    return `Pickup from ${this.order.location}`;
  }

  isOrderDelivered() {
    return this.order.status === 'Delivered';
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.orderSub) {
      this.orderSub.unsubscribe();
    }
  }
}
