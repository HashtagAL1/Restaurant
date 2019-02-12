import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {UserService} from "../services/user.service";
import {RouterModule} from "@angular/router";
import {AllUsersComponent} from "./all-users/all-users.component";
import { MyCartComponent } from './my-cart/my-cart.component';
import { CartItemComponent } from './my-cart/cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [RegisterComponent, LoginComponent],
  declarations: [RegisterComponent, LoginComponent, AllUsersComponent, MyCartComponent, CartItemComponent],
  providers: [UserService]
})
export class UsersModule { }
