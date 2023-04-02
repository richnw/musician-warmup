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
    audio.crossOrigin = 'anonymous';
    audio.src = "assets/ping.mp3"
      audio.load()
      audio.play()
    counter++;
    this.showButton = false;
  }

  printExercise() {
    if (counter == 0) return '';
    if (counter == 1) return 'Jump around and shake everything out';
    if (counter == 2) return 'Twists';
    if (counter == 3) return 'Side bends';
    if (counter == 4) return 'Hula hoops';
    if (counter == 5) return 'Standing Cat/Cow \n (arch spine forwards then backwards)';
    if (counter == 6) return 'Shoulder rolls';
    if (counter == 7) return 'Fingertips on shoulders - elbow circles';
    if (counter == 8) return 'Bicep curls';    
    if (counter == 9) return 'Keeping elbows at side: rotate palms to face down then up';
    if (counter == 10) return 'Clasp hands together and make wrist circles in both directions';
    if (counter == 11) return 'Finger flicks';
    return "Congratulations- you're ready to play";
  }

  handleEvent(e: CountdownEvent) {
    if (e.action == 'done' && counter == 11) {
      counter++;
      audio.crossOrigin = 'anonymous';
      audio.src = "assets/end.mp3"
      audio.load()
      audio.play()
      return;
    }
    if (e.action == 'done' && counter == 2) {
      this.countdown.config = { leftTime: 25, demand: true };
    }
    if (e.action == 'done' && counter == 5) {
      this.countdown.config = { leftTime: 15, demand: true };
    }
    if (e.action == 'done' && counter == 7) {
      this.countdown.config = { leftTime: 10, demand: true };
    }

    if (e.action == 'done') {
      counter++;
      audio.crossOrigin = 'anonymous';
      audio.src = "assets/ping.mp3"
      audio.load()
      audio.play()
      this.countdown.restart();
      this.countdown.begin();
    }
  }
}
