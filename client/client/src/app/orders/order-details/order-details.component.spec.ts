import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsComponent } from './order-details.component';
import {UsersModule} from "../../users/users.module";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NotifierModule} from "angular-notifier";

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>
  const order = {
    "_id" : "5c67712c52b75c07cc072ba6",
    "cart" : [
      {
        "meal" : {
          "ingredients" : [
            "Chicken",
            "Parmesan",
            "Peppers",
            "Garlic",
            "Tomatoes",
            "Mozzarella"
          ],
          "_id" : "5c5f1ce4b1a4ba36f341ca99",
          "name" : "Chicken Parm",
          "price" : 5.99,
          "imageUrl" : "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170920150817-chicken-parm.jpg",
          "category" : "appetizer",
          "description" : "Melted Parmesan and mozzarella cheese, and a peppery, garlicky tomato sauce drizzled over the top of a chicken fillet - Aussie pub-goers claim this ostensibly Italian dish as their own. Since they make it so well, there's no point in arguing.",
          "__v" : 0
        },
        "qty" : 1,
        "subtotal" : 5.99
      }
    ],
    "location" : "delivery",
    "address" : "paca",
    "deliverer" : "nasito",
    "status" : "Delivered",
    "customerName" : "paca",
    "date" : "16-02-2019",
    "totalPrice" : 5.99,
    "username" : "Hashtag",
    "__v" : 0
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        NgxPaginationModule,
        UsersModule,
        NotifierModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    component.order = order;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
