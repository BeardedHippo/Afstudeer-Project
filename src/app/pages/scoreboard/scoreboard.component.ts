// Dit is de scoreboard voor alle groepjes

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupOfChildren } from 'src/app/models/classOfChildrenModel';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.sass']
})
export class ScoreboardComponent implements OnInit {
  classGroups: GroupOfChildren[] = [];

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
  
  constructor(private router: Router, private classes: ClassesOfChildrenService) {
    if(!classes.getSelectedClass()) {
      this.router.navigate(['/']);
    }

    this.classGroups = this.classes.getSelectedClass()!.groups; 
    this.sortGroups();
  }

  ngOnInit(): void {}

  sortGroups() {
    const sortedGroups = this.classes.getSelectedClass()!.groups.sort(function(a, b) {
      return b.points - a.points;
    })    

    sortedGroups.forEach((sortedGroup, index) => {
      const positionKeys = Object.keys(this.groupPositions)
      this.groupPositions[positionKeys[index]] = sortedGroups[index].name
    })
  }
}
