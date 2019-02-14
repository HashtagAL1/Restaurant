import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {NotifierService} from "angular-notifier";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: any;
  isEmpty = false;

  constructor(public orderService: OrderService,
              public notifier: NotifierService,
              public router: Router) { }

  ngOnInit() {
    this.orderService.getUserOrders().subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('info', 'An error occurred');
          this.router.navigate(['/menu']);
          return;
      }
      if (res.orders.length === 0) {
          this.isEmpty = true;
          return;
      }
      this.orders = res.orders;
    });
  }

}
