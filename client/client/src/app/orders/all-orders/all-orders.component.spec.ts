import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdersComponent } from './all-orders.component';
import {SingleOrderComponent} from "./single-order/single-order.component";
import {NotifierModule} from "angular-notifier";
import {UsersModule} from "../../users/users.module";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {OrderService} from "../../services/order.service";
import {MockOrderService} from "../../services/mock-order.service";

describe('AllOrdersComponent', () => {
  let component: AllOrdersComponent;
  let fixture: ComponentFixture<AllOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrdersComponent, SingleOrderComponent ],
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
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
