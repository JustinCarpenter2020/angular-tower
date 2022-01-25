import { TestBed } from '@angular/core/testing';

import { TowerEventService } from './tower-event.service';

describe('TowerEventService', () => {
  let service: TowerEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TowerEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
