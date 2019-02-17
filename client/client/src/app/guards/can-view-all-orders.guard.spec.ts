import { TestBed, async, inject } from '@angular/core/testing';

import { CanViewAllOrdersGuard } from './can-view-all-orders.guard';

describe('CanViewAllOrdersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanViewAllOrdersGuard]
    });
  });

  it('should ...', inject([CanViewAllOrdersGuard], (guard: CanViewAllOrdersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
