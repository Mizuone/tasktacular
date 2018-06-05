import { Injectable } from '@angular/core';
import taskData from '../data/taskdata';

@Injectable({
  providedIn: 'root'
})
export class ProfileweeklytasksService {

  public getWeeklyTasks(): Array<Object> {
    return taskData;
  }

  constructor() { }
}
