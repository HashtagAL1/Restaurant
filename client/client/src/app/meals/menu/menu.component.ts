import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";
import {MealService} from "../../services/meal.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  meals = [];
  categories = ['Main', 'Salad', 'Desert', 'Appetizer', 'Vegetarian', 'Soup', 'Pizza', 'Sandwich', 'Seafood', 'Other'];
  sortForm = new FormGroup({
    criteria: new FormControl('ascending', [Validators.required])
  });

  constructor(public auth: AuthorizationService,
              public router: Router,
              public mealService: MealService,
              public cartService: CartService) { }

  ngOnInit() {
    this.mealService.getAllMeals().subscribe((res) => {
      this.meals = res.meals.sort((a, b) => a.price - b.price);
    });
  }

  sort() {
    const criteria = this.sortForm.get('criteria').value;
    if (criteria === 'ascending') {
        this.meals = this.meals.sort((a, b) => a.price - b.price);
        return;
    }
    this.meals = this.meals.sort((a, b) => b.price - a.price);
  }

  addToCart(meal) {
    this.cartService.add(meal);
  }

}
