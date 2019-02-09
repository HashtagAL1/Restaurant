import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthorizationService} from "./services/authorization.service";
import {UsersModule} from "./users/users.module";
import {NotifierModule} from "angular-notifier";
import {MealsModule} from "./meals/meals.module";

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
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'left'
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
