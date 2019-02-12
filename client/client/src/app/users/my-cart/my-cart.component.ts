import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  cart: any;
  totalPrice: any;
  refresh: boolean;

  constructor(public cartService: CartService,
              public router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.initializeCart();
    this.totalPrice = this.cartService.getTotal();
    this.refresh = false;
  }

}
