import { TestBed } from '@angular/core/testing';

import { TypingStatsService } from './typing-stats-service';

describe('TypingStatsService', () => {
  let service: TypingStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
