import { Component, OnInit } from '@angular/core';

import M from 'node_modules/materialize-css/dist/js/materialize';
import { ProfileweeklytasksService } from '../../services/profileweeklytasks.service';
import { TaskselectedService } from '../../services/taskselected.service';

@Component({
  selector: 'app-weekly-calander',
  templateUrl: './weekly-calander.component.html',
  styleUrls: ['./weekly-calander.component.scss']
})
export class WeeklyCalanderComponent implements OnInit {

  // Model Two-way data binding Properties
  taskName: string;
  taskDescription: string;
  taskDay: string;
  taskEstimate: string;

  constructor(private weeklyTaskService: ProfileweeklytasksService, private selectedTask: TaskselectedService) {}

  ngOnInit() {
    this.initializeModalOnBtnClick();
    this.formModalSelectOptions();

    this.selectedTask.selected$.subscribe(task => this.selectTask(task));
  }


  private selectTask(task) {
    
  }

  public addTask() {
    console.log(this.taskName, this.taskDescription, this.taskDay, this.taskEstimate);

    this.tasks.push({
      name: this.taskName,
      description: this.taskDescription,
      day: this.taskDay,
      estimate: this.taskEstimate
    });
    
    this.sortedTasks = this.getSortedTasks();
    this.clearTwoWayProps();
    this.resetCalanderModelForm();
  }

  private clearTwoWayProps() {
    this.taskName = '';
    this.taskDescription = '';
    this.taskDay = '';
    this.taskEstimate = '';
  }

  private resetCalanderModelForm() {
    <HTMLFormElement>document.querySelector('.weekly-calander-modal form')['reset']();
  }

  private getSortedTasks(): Object {

    return {
      mondayTasks: this.getTasksByDay('monday'),
      tuesdayTasks: this.getTasksByDay('tuesday'),
      wednesdayTasks: this.getTasksByDay('wednesday'),
      thursdayTasks: this.getTasksByDay('thursday'),
      fridayTasks: this.getTasksByDay('friday'),
      saturdayTasks: this.getTasksByDay('saturday'),
      sundayTasks: this.getTasksByDay('sunday')
    }

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

  // Properties to intialize on startup
  private tasks = this.getWeeklyTasks();
  public sortedTasks: object = this.getSortedTasks();

}
