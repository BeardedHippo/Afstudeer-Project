// Dit bestand is de grootste service. Hierin wordt alle klassen en groepen van kinderen bijgehouden. Deze service wordt
// ook gebruikt om functies te bieden om een nieuwe klas te maken, groepen te maken of aan te passen etc. Alles dat
// betrekking heeft op een klas of groepje kinderen wordt hiermee behaald.

import { Injectable } from '@angular/core';
import { ClassOfChildren, GroupOfChildren } from '../models/classOfChildrenModel';
import { Difficulty, ValidDifficulty } from '../models/difficultyModels';

@Injectable({
  providedIn: 'root'
})
export class ClassesOfChildrenService {

  // Dit is een voorbeeld van een gemaakte klas aan kinderen.
  private classes: ClassOfChildren[] = [
    // {
    //   classId: 'hbdfrlikjghhdfjikl',
    //     className: 'ExampleClass',
    //     difficulty: {
    //       label: 'Basis 1',
    //       level: 0,
    //       id: 'BASIC_1'
    //     },
    //     groups: [
    //       {
    //         name: 'ExampleGroup1',
    //         points: 6
    //       },
    //       {
    //         name: 'ExampleGroup2',
    //         points: 6
    //       },
    //       {
    //         name: 'ExampleGroup13',
    //         points: 5
    //       }
    //     ],
    //     finishedTasks: {
    //       BASIC_1: []
    //     }
    // }
  ];

  private selectedClass: ClassOfChildren | undefined;

  public setNewClass(className: string) {
    let newClassExists = this.classes.some(singleClass => singleClass.className === className)

    if (newClassExists === false && className.length > 0) {
      this.classes.push({
        classId: this.generateClassId(),
        className,
        groups: [],
        finishedTasks: {}
      })
    }
  }

  public setClassName(className: string, newClassName: string) {
    let indexOfCurrentClass = this.classes.findIndex(classOfChildren => classOfChildren.className === className);
    let currentClass = this.classes[indexOfCurrentClass];
    
    currentClass.className = newClassName;
  }

  public validateClassName(newClassName: string) {
    let newClassExists = this.classes.some(singleClass => singleClass.className === newClassName)

    if (newClassExists === false && newClassName.length > 0) {
      return 'Valid';
    } else {
      return 'Invalid';
    }
  }

  public removeClass(className: string) {
    let indexOfCurrentClass = this.classes.findIndex(singleClass => singleClass.className === className);
    
    if (indexOfCurrentClass >= 0) {
      this.classes.splice(indexOfCurrentClass, 1)
    }
  }

  public setDifficulty(className: string, difficulty: ValidDifficulty) {
    let indexOfCurrentClass = this.classes.findIndex(singleClass => singleClass.className === className);
    let currentClass = this.classes[indexOfCurrentClass];
    let newDifficulty = Difficulty[difficulty];


    currentClass.difficulty = newDifficulty;
      
      if(!currentClass.finishedTasks![difficulty]) {
        this.setNewFinishedTaskGroup(indexOfCurrentClass, difficulty);
      }
  }
  
  public setFinishedTask(className: string, difficulty: ValidDifficulty, finishedTaskId: string) {
    let indexOfCurrentClass = this.classes.findIndex(singleClass => singleClass.className === className);    
    let currentClassDifficulty = this.classes[indexOfCurrentClass].finishedTasks[difficulty];

      if(currentClassDifficulty) {
        currentClassDifficulty.push({
          difficulty: Difficulty[difficulty],
          taskId: finishedTaskId
        });
      }
  }

  public addGroups(className: string, newGroups: GroupOfChildren[] ) {
    let indexOfCurrentClass = this.classes.findIndex(singleClass => singleClass.className === className);
    let currentClass = this.classes[indexOfCurrentClass];
    
    currentClass.groups = newGroups;
  }

  public setGroupName(className: string, oldGroupName: string, newGroupName: string) {
    let indexOfCurrentClass = this.classes.findIndex(singleClass => singleClass.className === className);
    let currentClass = this.classes[indexOfCurrentClass];
    let newGroupExists = currentClass.groups.some(group => group.name === newGroupName)

    if(newGroupExists === false) {
      let indexOfGroup = currentClass.groups.findIndex(group => group.name === oldGroupName);
      let selectedGroup = currentClass.groups[indexOfGroup];

      selectedGroup.name = newGroupName;
    }
  }

  public removeGroup(className: string, groupToRemove: string) {
    let indexOfCurrentClass = this.classes.findIndex(singleClass => singleClass.className === className);
    let currentClass = this.classes[indexOfCurrentClass];
    let indexOfGroup = currentClass.groups.findIndex(existingGroup => existingGroup.name === groupToRemove)
    
    if (indexOfGroup >= 0) {
      currentClass.groups.splice(indexOfGroup, 1)
    }
  }

  public getClasses() {
    return this.classes;
  }

  public selectClass(className: string) {
    let indexOfCurrentClass = this.classes.findIndex(singleClass => singleClass.className === className);
    let currentClass = this.classes[indexOfCurrentClass];
    console.log(currentClass);
    

    this.selectedClass = currentClass;
  }

  public getSelectedClass() {
    return this.selectedClass;
  }

  public setPoints(className: string, newGroups: GroupOfChildren[]){
    let groups: GroupOfChildren[] = [];

    this.selectedClass?.groups.forEach((group) => {
      const groupWithNewPoints = newGroups.find(newGroup => newGroup.name === group.name);

      if(groupWithNewPoints) {
        groups.push({
          name: group.name,
          points: group.points + groupWithNewPoints?.points
        })
      }
    });
    
    this.addGroups(className, groups);   
  }

  private generateClassId() {
    function generateId() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    let id = generateId();

    while (this.classes.some(singleClass => singleClass.classId === id) === true) {
      id = generateId();
    }

    return id;
  }

  private setNewFinishedTaskGroup(indexOfCurrentClass: number, difficulty: ValidDifficulty) {
    this.classes[indexOfCurrentClass].finishedTasks[difficulty] = [];
  }
}
