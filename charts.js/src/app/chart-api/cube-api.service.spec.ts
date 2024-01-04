import { TestBed } from '@angular/core/testing';

import { CubeApiService } from './cube-api.service';

describe('CubeApiService', () => {
  let service: CubeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
