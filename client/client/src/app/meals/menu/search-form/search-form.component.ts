import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MealService} from "../../../services/meal.service";
import {NotifierService} from "angular-notifier";
import {Router} from "@angular/router";
import {NgxNavigationWithDataComponent} from "ngx-navigation-with-data";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm = new FormGroup({
    query: new FormControl('', [Validators.required])
  });

  constructor(public mealService: MealService,
              public notifier: NotifierService,
              public router: Router,
              public navCtrl: NgxNavigationWithDataComponent) { }

  ngOnInit() {
  }

  search() {
    const query = this.searchForm.get('query').value;
    this.mealService.searchByName(query).subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('warning', res.message);
          return;
      }
      this.navCtrl.navigate('searchResults', {data: res.meals, title: `Search results for: ${query}`});
    })
  }

}
