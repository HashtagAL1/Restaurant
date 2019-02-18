import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";
import {RouterTestingModule} from "@angular/router/testing";

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NotifierModule,
        RouterTestingModule
      ],
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
