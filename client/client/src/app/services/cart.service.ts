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

  updateQty(meal, newQty) {
    this.cart = this.initializeCart();
    for (let item of this.cart) {
      if (item.meal._id === meal._id) {
          item.qty = newQty;
          item.subtotal = Number(item.qty) * Number(item.meal.price);
          this.saveData();
          break;
      }
    }
    return this.cart;
  }

  getTotal() {
    this.cart = this.initializeCart();
    let tempTotal = 0.0;
    for (let item of this.cart) {
      tempTotal += Number(item.subtotal);
    }
    return tempTotal;
  }

  removeItem(meal) {
    this.cart = this.initializeCart();
    this.cart = this.cart.filter(item => item.meal._id !== meal._id);
    this.saveData();
    return this.cart;
  }
}
