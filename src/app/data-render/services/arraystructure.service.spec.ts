import { TestBed } from '@angular/core/testing';

import { ArraystructureService } from './arraystructure.service';

describe('ArraystructureService', () => {
  let service: ArraystructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraystructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
