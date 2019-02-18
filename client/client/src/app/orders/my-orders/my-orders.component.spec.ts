import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersComponent } from './my-orders.component';
import {OrderRowComponent} from "./order-row/order-row.component";
import {NotifierModule} from "angular-notifier";
import {UsersModule} from "../../users/users.module";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {OrderService} from "../../services/order.service";
import {MockOrderService} from "../../services/mock-order.service";

describe('MyOrdersComponent', () => {
  let component: MyOrdersComponent;
  let fixture: ComponentFixture<MyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersComponent, OrderRowComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        NgxPaginationModule,
        UsersModule,
        NotifierModule
      ],
      providers: [
        {provide: OrderService, useClass: MockOrderService}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MyOrdersComponent);
      component = fixture.componentInstance;
    })
  }));

  /*beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
