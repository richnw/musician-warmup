import { Component, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';

let counter: number = 0;
let exerciseTime = 5;

@Component({
  selector: 'app-exercise-timer',
  templateUrl: './exercise-timer.component.html',
  styleUrls: ['./exercise-timer.component.css'],
})
export class ExerciseTimerComponent {
  public showButton: boolean = true;

  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;
  timeData = exerciseTime;
  constructor() {}

  start() {
    this.countdown.begin();
    counter++;
    this.showButton = false;
  }

  printExercise() {
    if (counter == 0) return '';
    if (counter == 1) return 'first';
    if (counter == 2) return 'second';
    if (counter == 3) return 'third';
    if (counter == 4) return 'fourth';
    if (counter == 5) return 'fifth';
    if (counter == 6) return 'sixth and final';
    return "Congratulations- you're ready to play";
  }

  handleEvent(e: CountdownEvent) {
    if (e.action == 'done' && counter == 6) {
      counter++;
      return;
    }
    if (e.action == 'done' && counter == 5) {
      this.countdown.config = { leftTime: 10, demand: true };
    }
    if (e.action == 'done') {
      counter++;
      console.log(counter);
      this.countdown.restart();
      this.countdown.begin();
    }
  }
}
