import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';
import { ProgressionService } from 'src/app/services/progression.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Task, TaskType } from '../../models/taskModels';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  currentTask: Task = this.TasksService.getTask(this.route.snapshot.params['id']);
  currentStoryIndex: number = 0;
  taskRouter: TaskType = 'main-story';
  latestStoryChoice: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private TasksService: TasksService, private classes: ClassesOfChildrenService, private progression: ProgressionService) {
    if(!classes.getSelectedClass()) {
      this.router.navigate(['/']);
    }
    progression.resetGroups();
  }

  ngOnInit(): void {}

  setTaskRouter(taskType: TaskType) {
    
    if(taskType === 'main-story') {
      this.currentStoryIndex++;
    }

    this.taskRouter = taskType;
  }

  handleStoryChoice(choice: number) {
    this.latestStoryChoice = choice;
  }

  returnedFromOptions(taskType: TaskType) {
    this.taskRouter = taskType;
  }
}
