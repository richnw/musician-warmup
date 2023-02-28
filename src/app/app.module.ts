import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciseTimerComponent } from './exercise-timer/exercise-timer.component';
import { CountdownModule, CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';

function countdownConfigFactory(): CountdownConfig {
  return { format: `ss` };
}

@NgModule({
  declarations: [
    AppComponent,
    ExerciseTimerComponent
  ],
  imports: [
    BrowserModule, CountdownModule
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
