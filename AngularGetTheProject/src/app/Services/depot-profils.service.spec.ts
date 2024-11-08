import { TestBed } from '@angular/core/testing';

import { DepotProfilsService } from './depot-profils.service';

describe('DepotProfilsService', () => {
  let service: DepotProfilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepotProfilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
