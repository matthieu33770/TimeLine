import { TestBed } from '@angular/core/testing';

import { CardmockService } from './cardmock.service';

describe('CardmockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardmockService = TestBed.get(CardmockService);
    expect(service).toBeTruthy();
  });
});
