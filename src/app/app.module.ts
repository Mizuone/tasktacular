import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PomodoroclockComponent } from './modules/pages/pomodoroclock/pomodoroclock.component';
import { SettingsComponent } from './modules/pages/settings/settings.component';
import { TasktacularModule } from './modules/tasktacularmodule/tasktacularmodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TasktacularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
console.log(TasktacularModule);
