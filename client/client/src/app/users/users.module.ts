import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {UserService} from "../services/user.service";
import {RouterModule} from "@angular/router";
import {AllUsersComponent} from "./all-users/all-users.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [RegisterComponent, LoginComponent],
  declarations: [RegisterComponent, LoginComponent, AllUsersComponent],
  providers: [UserService]
})
export class UsersModule { }
