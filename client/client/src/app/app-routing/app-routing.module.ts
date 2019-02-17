import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../shared/home/home.component';
import {RegisterComponent} from "../users/register/register.component";
import {LoginComponent} from "../users/login/login.component";
import {AllUsersComponent} from "../users/all-users/all-users.component";
import {AddMealComponent} from "../meals/add-meal/add-meal.component";
import {MenuComponent} from "../meals/menu/menu.component";
import {SearchResultsComponent} from "../meals/menu/search-results/search-results.component";
import {MealDetailsComponent} from "../meals/meal-details/meal-details.component";
import {MyCartComponent} from "../users/my-cart/my-cart.component";
import {MyOrdersComponent} from "../orders/my-orders/my-orders.component";
import {OrderDetailsComponent} from "../orders/order-details/order-details.component";
import {AllOrdersComponent} from "../orders/all-orders/all-orders.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'allUsers', component: AllUsersComponent},
  {path: 'addMeal', component: AddMealComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'searchResults', component: SearchResultsComponent},
  {path: 'mealDetails/:mealId', component: MealDetailsComponent},
  {path: 'myCart', component: MyCartComponent},
  {path: 'myOrders', component: MyOrdersComponent},
  {path: 'orderDetails/:orderId', component: OrderDetailsComponent},
  {path: 'allOrders', component: AllOrdersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
