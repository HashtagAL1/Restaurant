import { TestBed, inject } from '@angular/core/testing';

import { MealService } from './meal.service';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {NotifierModule} from "angular-notifier";

describe('MealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NotifierModule
      ],
      providers: [MealService]
    });
  });

  it('should be created', inject([MealService], (service: MealService) => {
    expect(service).toBeTruthy();
  }));
});
