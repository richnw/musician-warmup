import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTimerComponent } from './exercise-timer.component';

describe('ExerciseTimerComponent', () => {
  let component: ExerciseTimerComponent;
  let fixture: ComponentFixture<ExerciseTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
