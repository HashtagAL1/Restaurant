import { TestBed, async, inject } from '@angular/core/testing';

import { CanViewOrderDetailsGuard } from './can-view-order-details.guard';

describe('CanViewOrderDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanViewOrderDetailsGuard]
    });
  });

  it('should ...', inject([CanViewOrderDetailsGuard], (guard: CanViewOrderDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
