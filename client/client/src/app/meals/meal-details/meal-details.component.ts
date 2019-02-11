import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MealService} from "../../services/meal.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  meal: any;

  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              public mealService: MealService,
              public notifier: NotifierService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.mealService.getMeal(params.mealId).subscribe((res) => {
        if (!res.success) {
          this.notifier.notify('warning', res.message);
          this.router.navigate(['/menu']);
          return;
        }
        this.meal = res.meal;
      });
    });
  }

  delete() {
    this.mealService.deleteMeal(this.meal._id).subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('danger', res.message);
          return;
      }
      this.notifier.notify('success', res.message);
      this.router.navigate(['/menu']);
    })
  }

}
