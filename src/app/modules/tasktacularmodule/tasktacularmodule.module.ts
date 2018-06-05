import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from '../pages/profile/profile.page';
import { WeeklyCalanderComponent } from '../components/weekly-calander/weekly-calander.component';
import { TaskscompletedcardComponent } from '../components/taskscompletedcard/taskscompletedcard.component';
import { SubtaskscardComponent } from '../components/subtaskscard/subtaskscard.component';
import { PomodorosdonecardComponent } from '../components/pomodorosdonecard/pomodorosdonecard.component';
import { ActiveprojectcardComponent } from '../components/activeprojectcard/activeprojectcard.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { DisplaytaskComponent } from '../components/displaytask/displaytask.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NavigationComponent,
    WeeklyCalanderComponent,
    TaskscompletedcardComponent,
    SubtaskscardComponent,
    PomodorosdonecardComponent,
    ActiveprojectcardComponent,
    DisplaytaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class TasktacularModule { }
