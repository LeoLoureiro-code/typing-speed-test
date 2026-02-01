import { TestBed } from '@angular/core/testing';

import { TypingStateService } from './typing-state-service';

describe('TypingStateService', () => {
  let service: TypingStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
