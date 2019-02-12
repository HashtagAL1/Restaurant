import {Component, Input, OnInit} from '@angular/core';
import {AuthorizationService} from "../../../services/authorization.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  @Input() meals: any;
  p: any;

  constructor(public auth: AuthorizationService,
              public cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(meal) {
    this.cartService.add(meal);
  }

}
