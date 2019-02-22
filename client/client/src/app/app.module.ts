import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthorizationService} from "./services/authorization.service";
import {UsersModule} from "./users/users.module";
import {NotifierModule} from "angular-notifier";
import {MealsModule} from "./meals/meals.module";
import {OrdersModule} from "./orders/orders.module";
import {HttpClientModule} from "@angular/common/http";
import {NgHttpLoaderModule} from "ng-http-loader";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    MealsModule,
    OrdersModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 3000
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide'
        },
        hide: {
          preset: 'slide'
        }
      }
    })
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
