import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable } from 'rxjs'
import { passageInterface } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PassageService {

  private url = 'assets/data/data.json';

constructor(private http: HttpClient) {}  
  

getFilteredPassages(mode: passageInterface['mode'], difficulty: passageInterface['difficulty']):Observable<passageInterface[]>{
  return this.http.get<passageInterface[]>(this.url).pipe(
      map(passages =>
        passages.filter(p =>
          p.mode === mode && p.difficulty === difficulty
        )
      )
    );
}

test(){
  return this.http.get(this.url);
}
}
