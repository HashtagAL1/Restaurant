import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgxNavigationWithDataComponent} from "ngx-navigation-with-data";
import {CartService} from "../../../services/cart.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  meals: any;
  title: string;

  constructor(public navCtrl: NgxNavigationWithDataComponent,
              public cartService: CartService,
              public router: Router) { }

  ngOnInit() {
    this.meals = this.navCtrl.get('data');
    this.title = this.navCtrl.get('title');
    if (isNullOrUndefined(this.meals)) {
        this.router.navigate(['/menu']);
    }
  }

  addToCart(meal) {
    this.cartService.add(meal);
  }

}
