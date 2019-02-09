import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {AuthorizationService} from "../services/authorization.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {MealService} from "../services/meal.service";
import { AddMealComponent } from './add-meal/add-meal.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [MenuComponent, AddMealComponent],
  declarations: [MenuComponent, AddMealComponent],
  providers: [AuthorizationService, MealService]
})
export class MealsModule { }
