import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {AuthorizationService} from "../services/authorization.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {MealService} from "../services/meal.service";
import { AddMealComponent } from './add-meal/add-meal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { FilterFormComponent } from './menu/filter-form/filter-form.component';
import { SearchFormComponent } from './menu/search-form/search-form.component';
import { SearchResultsComponent } from './menu/search-results/search-results.component';
import {NgxNavigationWithDataComponent} from "ngx-navigation-with-data";
import { MealDetailsComponent } from './meal-details/meal-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    MenuComponent, AddMealComponent, FilterFormComponent, SearchFormComponent,
    SearchResultsComponent, MealDetailsComponent
  ],
  declarations: [
    MenuComponent, AddMealComponent, FilterFormComponent, SearchFormComponent,
    SearchResultsComponent, MealDetailsComponent
  ],
  providers: [
    AuthorizationService, MealService, NgxNavigationWithDataComponent
  ]
})
export class MealsModule { }
