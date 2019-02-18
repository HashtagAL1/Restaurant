import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import {UsersModule} from "../../users/users.module";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {AuthorizationService} from "../../services/authorization.service";
import {OrderService} from "../../services/order.service";
import {NotifierModule} from "angular-notifier";

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        UsersModule,
        NotifierModule
      ],
      declarations: [ NavigationComponent ],
      providers: [AuthorizationService, OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
