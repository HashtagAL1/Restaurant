import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../shared/home/home.component';
import {AllUsersComponent} from "../users/all-users/all-users.component";
import {AddMealComponent} from "../meals/add-meal/add-meal.component";
import {MenuComponent} from "../meals/menu/menu.component";
import {SearchResultsComponent} from "../meals/menu/search-results/search-results.component";
import {MealDetailsComponent} from "../meals/meal-details/meal-details.component";
import {MyCartComponent} from "../users/my-cart/my-cart.component";
import {MyOrdersComponent} from "../orders/my-orders/my-orders.component";
import {OrderDetailsComponent} from "../orders/order-details/order-details.component";
import {AllOrdersComponent} from "../orders/all-orders/all-orders.component";
import {AdminGuard} from "../guards/admin.guard";
import {ModeratorGuard} from "../guards/moderator.guard";
import {LoggedGuard} from "../guards/logged.guard";
import {CanViewAllOrdersGuard} from "../guards/can-view-all-orders.guard";
import {CanViewOrderDetailsGuard} from "../guards/can-view-order-details.guard";
import {PageNotFoundComponent} from "../shared/page-not-found/page-not-found.component";
import {ContactUsComponent} from "../shared/contact-us/contact-us.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'allUsers', component: AllUsersComponent, canActivate: [AdminGuard]},
  {path: 'addMeal', component: AddMealComponent, canActivate: [ModeratorGuard]},
  {path: 'menu', component: MenuComponent},
  {path: 'searchResults', component: SearchResultsComponent},
  {path: 'mealDetails/:mealId', component: MealDetailsComponent},
  {path: 'myCart', component: MyCartComponent, canActivate: [LoggedGuard]},
  {path: 'myOrders', component: MyOrdersComponent, canActivate: [LoggedGuard]},
  {path: 'orderDetails/:orderId', component: OrderDetailsComponent, canActivate: [CanViewOrderDetailsGuard]},
  {path: 'allOrders', component: AllOrdersComponent, canActivate: [CanViewAllOrdersGuard]},
  {path: 'contactUs', component: ContactUsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
