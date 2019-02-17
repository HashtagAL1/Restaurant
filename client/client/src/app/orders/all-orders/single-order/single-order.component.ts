import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {NotifierService} from "angular-notifier";
import {AuthorizationService} from "../../../services/authorization.service";

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {

  @Input() order: any;

  constructor(public orderService: OrderService,
              public notifier: NotifierService,
              public auth: AuthorizationService) { }

  ngOnInit() {
  }

  getRowClass() {
    switch (this.order.status) {
      case 'In Progress': return 'bg-yellowCustom customRow text-center font-weight-bold';
      case 'Taken': return 'bg-danger customRow text-center font-weight-bold';
      case 'Delivered': return 'bg-primary customRow text-center font-weight-bold';
    }
  }

  displayTakeButton() {
    return this.order.status === 'In Progress' && this.auth.isDeliverer();
  }

  displayDeliverButton() {
    return this.order.status === 'Taken' &&
      this.auth.isDeliverer() &&
      this.order.deliverer === this.auth.getUsername();
  }

  takeOrder() {
    this.orderService.updateOrderStatus(this.order._id, 'Taken').subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('warning', res.message);
          return;
      }
      this.notifier.notify('success', 'Order Taken!');
      this.ngOnInit();
    });
  }

  deliverOrder() {
    this.orderService.updateOrderStatus(this.order._id, 'Delivered').subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('warning', res.message);
          return;
      }
      this.notifier.notify('success', 'Order Delivered!');
      this.ngOnInit();
    })
  }

}
