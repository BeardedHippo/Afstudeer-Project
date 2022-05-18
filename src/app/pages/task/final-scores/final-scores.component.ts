import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupOfChildren } from 'src/app/models/classOfChildrenModel';
import { ValidDifficulty } from 'src/app/models/difficultyModels';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';
import { ProgressionService } from 'src/app/services/progression.service';
import { Task } from 'src/app/models/taskModels';


@Component({
  selector: 'app-final-scores',
  templateUrl: './final-scores.component.html',
  styleUrls: ['./final-scores.component.sass']
})
export class FinalScoresComponent implements OnInit {
  @Input('currentTask') currentTask!: Task;
  
  classGroups: GroupOfChildren[] = [];
  newGroups: object[] = this.progression.getGroups();
  sortedGroups: GroupOfChildren[] = [];
  groupPositions: any = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
    eighth: ''
  };

  constructor(private route: ActivatedRoute, private progression: ProgressionService, private classes: ClassesOfChildrenService) {
    this.classGroups = this.classes.getSelectedClass()!.groups; 
  }

  ngOnInit(): void {
      let difficultyId = this.currentTask.difficulty.id as ValidDifficulty;
      
      this.classes.setFinishedTask(this.classes.getSelectedClass()!.className, difficultyId ,this.route.snapshot.params['id'])
      this.classes.setPoints(this.classes.getSelectedClass()!.className, this.progression.getGroups());
      this.sortGroups();
      this.classGroups = this.classes.getSelectedClass()!.groups;

  }

  sortGroups() {
    const sortedGroups = this.classes.getSelectedClass()!.groups.sort(function(a, b) {
      return b.points - a.points;
    })
    
    Object.keys(this.groupPositions)

    sortedGroups.forEach((sortedGroup, index) => {
      const positionKeys = Object.keys(this.groupPositions)
      this.groupPositions[positionKeys[index]] = sortedGroups[index].name
    })
  }

  setPosition(groupIndex: number) {
    return this.sortedGroups.indexOf(this.classGroups[groupIndex])
  }

}

//   groupPositions: any = [
//     {pos: '5em'},
//     {pos: '17em'},
//     {pos: '27em'},
//     {pos: '37em'},
//     {pos: '47em'},
//     {pos: '57em'},
//     {pos: '67em'},
//     {pos: '77em'}
//   ];

//   currentGroupPositions: any = {
//     0: '5em',
//     1: '17em',
//     2: '27em',
//     3: '37em',
//     4: '47em',
//     5: '57em',
//     6: '67em',
//     7: '77em'
//   };


//   constructor(private router: Router, private route: ActivatedRoute, private progression: ProgressionService, private classes: ClassesOfChildrenService) {
//     this.classGroups = this.classes.getSelectedClass()!.groups; 
//   }

//   ngOnInit(): void {
//     let difficultyId = this.currentTask.difficulty.id as ValidDifficulty;
    
//     this.classes.setFinishedTask(this.classes.getSelectedClass()!.className, difficultyId ,this.route.snapshot.params['id'])
//     this.classes.setPoints(this.classes.getSelectedClass()!.className, this.progression.getGroups());
//     this.classGroups = this.classes.getSelectedClass()!.groups;
//     this.sortGroups();
//   }

//   sortGroups() {
//     let indexAnchors: number[] = [];

//     const sortedGroups = this.classes.getSelectedClass()!.groups.sort(function(a, b) {
//       return b.points - a.points;
//     })

//     sortedGroups.forEach((group) => {
//       indexAnchors.push(this.classGroups.indexOf(group))
//     })

//     indexAnchors.forEach((groupIndex, index) => {
//       this.currentGroupPositions[groupIndex] = this.groupPositions[index].pos
//     })
//   }

// }

