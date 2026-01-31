import { TestBed } from '@angular/core/testing';

import { TypingInputService } from './typing-input-service';

describe('TypingInputService', () => {
  let service: TypingInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
