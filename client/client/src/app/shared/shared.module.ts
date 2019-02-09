import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AuthorizationService} from "../services/authorization.service";
import {AppRoutingModule} from "../app-routing/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HomeComponent, NavigationComponent],
  providers: [AuthorizationService],
  declarations: [HomeComponent, NavigationComponent]
})
export class SharedModule { }
