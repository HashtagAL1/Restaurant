import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MealService} from "../../../services/meal.service";
import {NgxNavigationWithDataComponent} from "ngx-navigation-with-data";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  @Input() categories: any;
  filterForm = new FormGroup({
    category: new FormControl('main', [Validators.required])
  });

  constructor(public mealService: MealService,
              public navCtrl: NgxNavigationWithDataComponent,
              public notifier: NotifierService) { }

  ngOnInit() {
  }

  filter() {
    let category = this.filterForm.get('category').value;
    this.mealService.getAllMealsCategory(category).subscribe((res) => {
      if (!res.success) {
        this.notifier.notify('info', res.message);
        return;
      }
      category = category[0].toUpperCase() + category.slice(1);
      this.navCtrl.navigate('searchResults', {data: res.meals, title: `Category: ${category}`});
    });
  }

}
