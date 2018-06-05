import { Component, OnInit } from '@angular/core';

import M from 'node_modules/materialize-css/dist/js/materialize';
import { ProfileweeklytasksService } from '../../services/profileweeklytasks.service';


@Component({
  selector: 'app-weekly-calander',
  templateUrl: './weekly-calander.component.html',
  styleUrls: ['./weekly-calander.component.scss']
})
export class WeeklyCalanderComponent implements OnInit {
  constructor(private weeklyTaskService: ProfileweeklytasksService) {}

  ngOnInit() {
    this.initializeModalOnBtnClick();
    this.formModalSelectOptions();
  }

  private getWeeklyTasks(): Array<Object> {
    return this.weeklyTaskService.getWeeklyTasks();
  }

  private getTasksByDay(day: string): Array<Object> {

    return this.tasks.filter((task) => {
      return task['day'] === day;
    });

  }


  private initializeModalOnBtnClick(): void {
    let modal = document.querySelector('.weekly-calander-modal');
    let instance = M.Modal.init(modal, {});
  }

  private formModalSelectOptions(): void {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems, {});
  }

  private tasks = this.getWeeklyTasks();

  public mondayTasks = this.getTasksByDay('monday');
  public tuesdayTasks = this.getTasksByDay('tuesday');
  public wednesdayTasks = this.getTasksByDay('wednesday');
  public thursdayTasks = this.getTasksByDay('thursday');
  public fridayTasks = this.getTasksByDay('friday');
  public saturdayTasks = this.getTasksByDay('saturday');
  public sundayTasks = this.getTasksByDay('sunday');

}
