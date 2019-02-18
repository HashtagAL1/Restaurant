import { TestBed, async, inject } from '@angular/core/testing';

import { CanViewAllOrdersGuard } from './can-view-all-orders.guard';
import {NotifierModule} from "angular-notifier";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('CanViewAllOrdersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NotifierModule
      ],
      providers: [CanViewAllOrdersGuard]
    });
  });

  it('should ...', inject([CanViewAllOrdersGuard], (guard: CanViewAllOrdersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
