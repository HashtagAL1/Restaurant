import { TestBed, async, inject } from '@angular/core/testing';

import { CanViewOrderDetailsGuard } from './can-view-order-details.guard';
import {NotifierModule} from "angular-notifier";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('CanViewOrderDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NotifierModule
      ],
      providers: [CanViewOrderDetailsGuard]
    });
  });

  it('should ...', inject([CanViewOrderDetailsGuard], (guard: CanViewOrderDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
