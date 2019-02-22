import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MealService} from "../../services/meal.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit, OnDestroy {



  @Input() meal: any;
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^^\d+\.\d+$/)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/^http[a-zA-Z\d:\/\.\_\-\,\%\=\?\&]+$/)]),
    category: new FormControl('main', [Validators.required]),
    ingredients: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });
  categories = ['Main', 'Salad', 'Desert', 'Appetizer', 'Vegetarian', 'Soup', 'Pizza', 'Sandwich', 'Seafood', 'Other'];
  sub: Subscription;

  constructor(public mealService: MealService,
              public router: Router,
              public notifier: NotifierService) { }

  ngOnInit() {
    if (this.isForEdit()) {
        this.form.get('name').setValue(this.meal.name);
      this.form.get('price').setValue(this.meal.price);
      this.form.get('imageUrl').setValue(this.meal.imageUrl);
      this.form.get('category').setValue(this.meal.category);
      this.form.get('ingredients').setValue(this.meal.ingredients.join(','));
      this.form.get('description').setValue(this.meal.description);
    }
  }

  isForEdit(): boolean {
    return this.meal !== null;
  }

  submitForm() {
    const name = this.form.get('name').value;
    const price = Number(this.form.get('price').value);
    const imageUrl = this.form.get('imageUrl').value;
    const category = this.form.get('category').value;
    const ingredients = this.form.get('ingredients').value
      .split(',').filter(ing => ing !== '').map(ing => ing.trim());
    const description = this.form.get('description').value;
    if (!this.isForEdit()) {
      const meal = { name, price, imageUrl, category, ingredients, description};
      this.sub = this.mealService.addMeal(meal).subscribe((res) => {
        if (!res.success) {
          this.notifier.notify('warning', res.message);
          return;
        }
        this.notifier.notify('success', res.message);
        this.router.navigate(['/menu']);
      });
    } else {
      this.meal.name = name;
      this.meal.price = price;
      this.meal.imageUrl = imageUrl;
      this.meal.category = category;
      this.meal.ingredients = ingredients;
      this.meal.description = description;
      this.sub = this.mealService.editMeal(this.meal).subscribe((res) => {
        if (!res.success) {
            this.notifier.notify('warning', res.message);
            return;
        }
        this.notifier.notify('success', 'Meal successfully edited!');
        this.router.navigate(['/menu']);
      });
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
