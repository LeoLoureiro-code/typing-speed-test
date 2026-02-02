import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PassageService } from '../passage-service/passage-service';


@Injectable({
  providedIn: 'root',
})
export class TypingStateService {
  
  private mode$ = new BehaviorSubject<'timed' | 'passage'>('timed');
  private difficulty$ = new BehaviorSubject<'easy' | 'medium' | 'hard'>('easy');
  private running$ = new BehaviorSubject<boolean>(false);

  //Add services when finished
  constructor(
    private passageService: PassageService,
  ) {}

  
  setMode(mode: 'timed' | 'passage') {
    this.mode$.next(mode);
  }

  setDifficulty(level: 'easy' | 'medium' | 'hard') {
    this.difficulty$.next(level);
  }


}
