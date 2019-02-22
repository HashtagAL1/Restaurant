import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AuthorizationService} from "../services/authorization.service";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {UsersModule} from "../users/users.module";
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {NgxSlidesModule} from "ngx-slides";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    UsersModule,
    NgxSlidesModule
  ],
  exports: [HomeComponent, NavigationComponent, FooterComponent],
  providers: [AuthorizationService],
  declarations: [HomeComponent, NavigationComponent, FooterComponent, PageNotFoundComponent, ContactUsComponent, AboutUsComponent]
})
export class SharedModule { }
