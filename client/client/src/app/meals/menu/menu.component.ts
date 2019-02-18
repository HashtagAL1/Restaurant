import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";
import {MealService} from "../../services/meal.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  meals = [];
  categories = ['Main', 'Salad', 'Desert', 'Appetizer', 'Vegetarian', 'Soup', 'Pizza', 'Sandwich', 'Seafood', 'Other'];

  constructor(public auth: AuthorizationService,
              public router: Router,
              public mealService: MealService) { }

  ngOnInit() {
    this.mealService.getAllMeals().subscribe((res) => {
      this.meals = res.meals.sort((a, b) => a.price - b.price);
    });
  }

}
