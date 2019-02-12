import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-items-list',
  templateUrl: './cart-items-list.component.html',
  styleUrls: ['./cart-items-list.component.css']
})
export class CartItemsListComponent implements OnInit {

  @Input() cart;
  qtyValue: any;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  update(meal, newQty) {
    this.cart = this.cartService.updateQty(meal, newQty);
  }

  remove(meal) {
    this.cart = this.cartService.removeItem(meal);
  }

}
