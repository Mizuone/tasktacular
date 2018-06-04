import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { WeeklyCalanderComponent } from './profile/weekly-calander/weekly-calander.component';
import { TaskscompletedcardComponent } from './profile/taskscompletedcard/taskscompletedcard.component';
import { SubtaskscardComponent } from './profile/subtaskscard/subtaskscard.component';
import { PomodorosdonecardComponent } from './profile/pomodorosdonecard/pomodorosdonecard.component';
import { ActiveprojectcardComponent } from './profile/activeprojectcard/activeprojectcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WeeklyCalanderComponent,
    TaskscompletedcardComponent,
    SubtaskscardComponent,
    PomodorosdonecardComponent,
    ActiveprojectcardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
