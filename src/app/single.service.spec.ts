import { TestBed } from '@angular/core/testing';

import { SingleService } from './single.service';

describe('SingleService', () => {
  let service: SingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
