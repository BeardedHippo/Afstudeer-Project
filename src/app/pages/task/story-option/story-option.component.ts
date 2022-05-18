import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { GroupOfChildren } from 'src/app/models/classOfChildrenModel';
import { ChoiceStory } from 'src/app/models/storyModels';
import { Task, TaskType } from 'src/app/models/taskModels';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';
import { ProgressionService } from 'src/app/services/progression.service';

@Component({
  selector: 'app-story-option',
  templateUrl: './story-option.component.html',
  styleUrls: ['./story-option.component.sass']
})
export class StoryOptionComponent implements OnInit {
  @Input('currentStoryIndex') currentStoryIndex: number = 0;

  @Input('currentTask') currentTask: Task | undefined;
  
  @Output() handleChoiceStory: EventEmitter<TaskType> = new EventEmitter();

  @Output() storyChoice: EventEmitter<number> = new EventEmitter();

  @Output() returnToMainStory: EventEmitter<TaskType> = new EventEmitter();

  groups: GroupOfChildren[] = [];
  
  confirmExit: boolean = false;

  infoWindow = {
    visibility: false,
    choice: 0
  };

  leftList: GroupOfChildren[] = [];
  rightList: GroupOfChildren[] = [];

  hiddenAnswers: boolean = true;

  newGroups: GroupOfChildren[] = this.progression.getGroups();

  storyOptions: ChoiceStory[] = [];
  
  constructor(private progression: ProgressionService, private classes: ClassesOfChildrenService) {
    this.groups = this.classes.getSelectedClass()!.groups;
  }

  ngOnInit(): void {
    this.storyOptions = this.currentTask!.mainStory[this.currentStoryIndex].storyOptions;
  }

  toChoiceStory(choice: number) {
    if(this.hiddenAnswers) {
      return
    }
    this.progression.setGroups(this.leftList.concat(this.rightList));
    this.storyChoice.emit(choice);
    this.handleChoiceStory.emit("choice-story");
  }

  confirmationWindow(value: boolean) {
    this.confirmExit = value;
  }
  
  toggleInfoWindow(toggler: boolean) {
    this.infoWindow.visibility = toggler; 
  }

  back() {   
    this.progression.setGroups(this.newGroups.concat(this.leftList, this.rightList))
    this.returnToMainStory.emit("main-story");
  }

  drop(event: CdkDragDrop<GroupOfChildren[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  showAnswers(pointsLeft: number, pointsRight: number) {
    this.leftList = this.leftList.map((group) => {
      return {
        name: group.name,
        points: group.points + pointsLeft
      }
    });

    this.rightList = this.rightList.map((group) => {
      return {
        name: group.name,
        points: group.points + pointsRight
      }
    });

    this.hiddenAnswers = false;
  }
}
