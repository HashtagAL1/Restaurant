import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../shared/home/home.component';
import {RegisterComponent} from "../users/register/register.component";
import {LoginComponent} from "../users/login/login.component";
import {AllUsersComponent} from "../users/all-users/all-users.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'allUsers', component: AllUsersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
