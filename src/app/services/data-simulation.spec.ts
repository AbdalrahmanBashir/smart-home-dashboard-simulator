import { TestBed } from '@angular/core/testing';

import { DataSimulation } from './data-simulation';

describe('DataSimulation', () => {
  let service: DataSimulation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSimulation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
