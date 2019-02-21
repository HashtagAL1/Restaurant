import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {NotifierService} from "angular-notifier";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MealService} from "../../services/meal.service";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^^\d+\.\d+$/)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/^http[a-zA-Z\d:\/\.\_\-\,\%\=\?\&]+$/)]),
    category: new FormControl('main', [Validators.required]),
    ingredients: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });
  //categories = ['Main', 'Salad', 'Desert', 'Appetizer', 'Vegetarian', 'Soup', 'Pizza', 'Sandwich', 'Seafood', 'Other'];

  constructor(public notifier: NotifierService,
              public mealService: MealService,
              public router: Router) { }

  ngOnInit() {
  }

  addMeal() {
    const name = this.addForm.get('name').value;
    const price = Number(this.addForm.get('price').value);
    const imageUrl = this.addForm.get('imageUrl').value;
    const category = this.addForm.get('category').value;
    const ingredients = this.addForm.get('ingredients').value
      .split(',').filter(ing => ing !== '').map(ing => ing.trim());
    const description = this.addForm.get('description').value;
    const meal = { name, price, imageUrl, category, ingredients, description};
    this.mealService.addMeal(meal).subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('warning', res.message);
          return;
      }
      this.notifier.notify('success', res.message);
      this.router.navigate(['/']);
    })
  }

}
