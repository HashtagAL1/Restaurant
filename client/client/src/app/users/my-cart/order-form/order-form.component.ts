import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../services/order.service";
import {AuthorizationService} from "../../../services/authorization.service";
import {NotifierService} from "angular-notifier";
import {Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() cart: any;
  @Input() totalPrice: any;
  orderForm = new FormGroup({
    customerName: new FormControl('', [Validators.required]),
    pickup: new FormControl('delivery', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required])
  });

  constructor(public orderService: OrderService,
              public auth: AuthorizationService,
              public notifier: NotifierService,
              public router: Router,
              public cartService: CartService,
              public datePipe: DatePipe) { }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  checkAddress(value: string) {
    if (value !== 'delivery') {
        this.orderForm.get('customerAddress').disable();
    } else {
      this.orderForm.get('customerAddress').enable();
    }
  }

  takeOrder() {
    let date = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    let order = {
      customerName: this.orderForm.get('customerName').value,
      location: this.orderForm.get('pickup').value,
      address: this.orderForm.get('customerAddress').value,
      date: date,
      cart: this.cart,
      totalPrice: this.totalPrice,
      username: this.auth.getUsername()
    };

    this.orderService.makeOrder(order).subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('warning', res.message);
          return;
      }
      this.notifier.notify('success', 'Order Taken');
      this.router.navigate(['/menu']);
      this.cartService.clear();
    });
  }



}
