import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {OrderService} from "../services/order.service";
import {AuthorizationService} from "../services/authorization.service";
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderRowComponent } from './my-orders/order-row/order-row.component';
import {NgxPaginationModule} from "ngx-pagination";
import { OrderDetailsComponent } from './order-details/order-details.component';
import {UsersModule} from "../users/users.module";
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { SingleOrderComponent } from './all-orders/single-order/single-order.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    UsersModule
  ],
  declarations: [MyOrdersComponent, OrderRowComponent, OrderDetailsComponent, AllOrdersComponent, SingleOrderComponent],
  providers: [OrderService, AuthorizationService]
})
export class OrdersModule { }
