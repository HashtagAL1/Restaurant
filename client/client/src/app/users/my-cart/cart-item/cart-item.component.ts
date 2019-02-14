import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: any;
  @Input() totalPrice: any;
  @Input() refresh: boolean;
  @Input() details: boolean;
  @Output() totalPriceChange = new EventEmitter();
  @Output() refreshEvent = new EventEmitter();

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  updateQty(qty) {
    this.item = this.cartService.updateQuantity(this.item, qty);
    this.totalPrice = this.cartService.getTotal();
    this.totalPriceChange.emit(this.totalPrice);
  }

  removeItem() {
    this.cartService.removeItem(this.item);
    this.totalPrice = this.cartService.getTotal();
    this.totalPriceChange.emit(this.totalPrice);
    this.refresh = true;
    this.refreshEvent.emit(this.refresh);
  }

}
