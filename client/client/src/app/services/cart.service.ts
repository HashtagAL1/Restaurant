import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any;

  constructor(public router: Router,
              public notifier: NotifierService) { }

  add(meal) {
    this.cart = this.initializeCart();
    for (let m of this.cart) {
      if (m.meal._id === meal._id) {
          this.notifier.notify('info', 'This meal is already in your cart');
          return;
      }
    }

    let product = {
      meal: meal,
      qty: 1,
      subtotal: meal.price
    };
    this.cart.push(product);
    this.saveData();
    this.notifier.notify('success', 'Meal added to cart');
    this.notifier.notify('info', 'You can adjust the quantity in the \'My Cart\' screen');
  }

  initializeCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  saveData() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
