import { TestBed } from '@angular/core/testing';

import { MockMealServiceService } from './mock-meal-service.service';

describe('MockMealServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockMealServiceService = TestBed.get(MockMealServiceService);
    expect(service).toBeTruthy();
  });
});
