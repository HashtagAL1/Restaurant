import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartComponent } from './my-cart.component';
import {CartItemComponent} from "./cart-item/cart-item.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {RouterTestingModule} from "@angular/router/testing";
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NotifierModule} from "angular-notifier";

describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCartComponent, CartItemComponent, OrderFormComponent ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        NgxPaginationModule,
        NotifierModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
