import { Component, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';

let counter: number = 0;
let exerciseTime = 30;
let audio = new Audio()

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
    audio.src = "../../assets/next.mp3"
      audio.load()
      audio.play()
    counter++;
    this.showButton = false;
  }

  printExercise() {
    if (counter == 0) return '';
    if (counter == 1) return 'Jump around and shake everything out';
    if (counter == 2) return 'Fingertips on shoulders - elbow circles';
    if (counter == 3) return 'Twists';
    if (counter == 4) return 'Side bends';
    if (counter == 5) return 'Hula hoops with wrist circles';
    if (counter == 6) return 'Fold forwards and hang upside down';
    return "Congratulations- you're ready to play";
  }

  handleEvent(e: CountdownEvent) {
    if (e.action == 'done' && counter == 6) {
      counter++;
      audio.src = "../../assets/finish.mp3"
      audio.load()
      audio.play()
      return;
    }
    if (e.action == 'done' && counter == 5) {
      this.countdown.config = { leftTime: 60, demand: true };
    }
    if (e.action == 'done') {
      counter++;
      console.log(counter);
      audio.src = "../../assets/next.mp3"
      audio.load()
      audio.play()
      this.countdown.restart();
      this.countdown.begin();
    }
  }
}
