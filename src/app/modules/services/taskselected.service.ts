import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskselectedService {

  private _selected: BehaviorSubject<any> = new BehaviorSubject(null);

  public selected$ = this._selected.asObservable();

  select(task) {
    this._selected.next(task);
  }

  constructor() { }
}
