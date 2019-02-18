import { TestBed, async, inject } from '@angular/core/testing';

import { ModeratorGuard } from './moderator.guard';
import {NotifierModule} from "angular-notifier";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('ModeratorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NotifierModule
      ],
      providers: [ModeratorGuard]
    });
  });

  it('should ...', inject([ModeratorGuard], (guard: ModeratorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
