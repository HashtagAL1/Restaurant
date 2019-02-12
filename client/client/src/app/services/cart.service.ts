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

  updateQuantity(item, newQty) {
    this.cart = this.initializeCart();
    for (let i of this.cart) {
      if (i.meal._id === item.meal._id) {
          i.qty = newQty;
          i.subtotal = Number(i.qty) * Number(i.meal.price);
          this.saveData();
          return i;
      }
    }
  }

  removeItem(item) {
    this.cart = this.initializeCart();
    this.cart = this.cart.filter(i => i.meal._id !== item.meal._id);
    this.saveData();
  }

  getTotal() {
    this.cart = this.initializeCart();
    let tempTotal = 0.0;
    for (let item of this.cart) {
      tempTotal += Number(item.subtotal);
    }
    return tempTotal.toFixed(2);
  }

  isEmpty() {
    const temp = this.initializeCart();
    return temp.length === 0;
  }
}
