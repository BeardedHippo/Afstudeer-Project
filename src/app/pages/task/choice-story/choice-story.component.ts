import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidDifficulty } from 'src/app/models/difficultyModels';
import { Task, TaskType } from 'src/app/models/taskModels';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';
import { ProgressionService } from 'src/app/services/progression.service';

@Component({
  selector: 'app-choice-story',
  templateUrl: './choice-story.component.html',
  styleUrls: ['./choice-story.component.sass']
})
export class ChoiceStoryComponent implements OnInit {
  @Input('currentStoryIndex') currentStoryIndex: number = 0;

  @Input('currentTask') currentTask!: Task;

  @Input('latestStoryChoice') latestStoryChoice!: number;
  
  @Output() handleMainStory: EventEmitter<TaskType> = new EventEmitter();

  videoUri: string = '';
  confirmExit: boolean = false;

  constructor(private route: ActivatedRoute, private progression: ProgressionService, private classes: ClassesOfChildrenService) {}

  ngOnInit(): void {
    this.videoUri = `${this.currentTask!.taskId}/CS${this.currentStoryIndex}-${this.latestStoryChoice}.mp4`;
  }

  toMainStory() {
    if(this.currentTask!.mainStory.length - 1 === this.currentStoryIndex) {
      // let difficultyId = this.currentTask.difficulty.id as ValidDifficulty;
      
      // this.classes.setFinishedTask(this.classes.getSelectedClass()!.className, difficultyId ,this.route.snapshot.params['id'])
      // this.classes.setPoints(this.classes.getSelectedClass()!.className, this.progression.getGroups());
      this.handleMainStory.emit("final-mainstory");
    } else {
      this.handleMainStory.emit("main-story");
    }
  }

  confirmationWindow(value: boolean) {
    this.confirmExit = value;
  }
}
