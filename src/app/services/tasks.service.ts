// Deze service bevat alle taken/spellen die er gespeeld kunnen worden. Deze wordt uit een bestandje gehaald waarin
// alles in een variabel staat.

import { Injectable } from '@angular/core';
import { tasks } from '../data/task-data';
import { Task } from '../models/taskModels';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = tasks;

  constructor() {}

  public getTask(taskId: string) {
    let singleTaskIndex = this.tasks.findIndex(task => task.taskId === taskId);
    return this.tasks[singleTaskIndex];
  }
}
