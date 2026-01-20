import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingInputComponent } from './typing-input-component';

describe('TypingInputComponent', () => {
  let component: TypingInputComponent;
  let fixture: ComponentFixture<TypingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
