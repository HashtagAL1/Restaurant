import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";
import {MealService} from "../../services/meal.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  meals = [];
  categories = ['Main', 'Salad', 'Desert', 'Appetizer', 'Vegetarian', 'Soup', 'Pizza', 'Sandwich', 'Seafood', 'Other'];
  sub: Subscription;

  constructor(public auth: AuthorizationService,
              public router: Router,
              public mealService: MealService) { }

  ngOnInit() {
    this.sub = this.mealService.getAllMeals().subscribe((res) => {
      this.meals = res.meals.sort((a, b) => a.price - b.price);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
