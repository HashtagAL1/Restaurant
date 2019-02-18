import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {NotifierModule} from "angular-notifier";
import {AuthorizationService} from "./authorization.service";

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NotifierModule
      ],
      providers: [OrderService, AuthorizationService]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));
});
