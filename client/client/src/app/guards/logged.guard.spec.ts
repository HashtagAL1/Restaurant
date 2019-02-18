import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedGuard } from './logged.guard';
import {NotifierModule} from "angular-notifier";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('LoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NotifierModule
      ],
      providers: [LoggedGuard]
    });
  });

  it('should ...', inject([LoggedGuard], (guard: LoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
