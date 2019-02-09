import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {AuthorizationService} from "../services/authorization.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {MealService} from "../services/meal.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  providers: [AuthorizationService, MealService]
})
export class MealsModule { }
