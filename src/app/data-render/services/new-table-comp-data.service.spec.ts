import { TestBed } from '@angular/core/testing';

import { NewTableCompDataService } from './new-table-comp-data.service';

describe('NewTableCompDataService', () => {
  let service: NewTableCompDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTableCompDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
