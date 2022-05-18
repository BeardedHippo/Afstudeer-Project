import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Task, TaskType } from 'src/app/models/taskModels';

@Component({
  selector: 'app-main-story',
  templateUrl: './main-story.component.html',
  styleUrls: ['./main-story.component.sass']
})
export class MainStoryComponent implements OnInit {
  @Input('currentStoryIndex') currentStoryIndex: number | undefined;

  @Input('currentTask') currentTask: Task | undefined;
  
  @Output() handleStoryOptions: EventEmitter<TaskType> = new EventEmitter();

  videoUri: string = '';
  confirmExit: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.videoUri = `${this.currentTask!.taskId}/MS${this.currentStoryIndex}.mp4`;
  }

  toStoryOptions() {
    this.handleStoryOptions.emit("story-options");
  }

  confirmationWindow(value: boolean) {
    this.confirmExit = value;
  }
}
