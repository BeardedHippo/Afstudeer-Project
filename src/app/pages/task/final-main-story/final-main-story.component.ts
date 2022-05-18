import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, TaskType } from 'src/app/models/taskModels';

@Component({
  selector: 'app-final-main-story',
  templateUrl: './final-main-story.component.html',
  styleUrls: ['./final-main-story.component.sass']
})
export class FinalMainStoryComponent implements OnInit {
  @Input('currentStoryIndex') currentStoryIndex: number = 0;

  @Input('currentTask') currentTask!: Task;

  @Output() handleFinalScores: EventEmitter<TaskType> = new EventEmitter();
  
  videoUri: string = "";
  confirmExit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.videoUri = `${this.currentTask!.taskId}/FINAL.mp4`;
  }

  confirmationWindow(value: boolean) {
    this.confirmExit = value;
  }

  toFinalScores() {
    this.handleFinalScores.emit("finish-scores");
  }
}
