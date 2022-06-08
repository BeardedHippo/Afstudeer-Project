// Dit is de pagina waarin de gebruiker eerder gemaakte klassen kan selecteren om mee verder te spelen

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassOfChildren } from 'src/app/models/classOfChildrenModel';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.sass']
})
export class SelectClassComponent implements OnInit {
  allClasses: ClassOfChildren[] = [];
  nameChangeWindow: boolean = false;
  selectedClassName: string = '';
  manageBarActive: string[] = [];

  constructor(public classes: ClassesOfChildrenService, private router: Router) { 
    this.allClasses = classes.getClasses();
  }

  ngOnInit(): void {}

  selectClass(className: string) {
    this.classes.selectClass(className);
    let selectedClass = this.classes.getSelectedClass();
  
    if (selectedClass!.groups.length === 0) {
      this.router.navigate(['beheer-groepen']); 
    } else if(!selectedClass?.difficulty) {
      this.router.navigate(['moeilijkheid']); 
    } else {
      this.router.navigate(['boardroom']);
    }

  }

  deactivateNameChange(value: boolean) {
    this.nameChangeWindow = value;
  }

  activateNameChange(className: string) {
    this.selectedClassName = className;
    this.nameChangeWindow = true;
  }

  removeClass(className: string) {
    this.classes.removeClass(className);
  }

  activateManageBar(className: string) {
    if(this.manageBarActive.includes(className)) {
      let index = this.manageBarActive.indexOf(className);
      this.manageBarActive.splice(index, 1);
    } else {
      this.manageBarActive.push(className);
    }
  }

  checkClassName(className: string) { 
    return this.manageBarActive.includes(className);
  }
}
