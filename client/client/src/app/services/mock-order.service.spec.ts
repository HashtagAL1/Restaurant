import { TestBed } from '@angular/core/testing';

import { MockOrderService } from './mock-order.service';

describe('MockOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockOrderService = TestBed.get(MockOrderService);
    expect(service).toBeTruthy();
  });
});
