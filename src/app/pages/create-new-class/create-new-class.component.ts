import { Component, Input, OnInit } from '@angular/core';
import { ClassesOfChildrenService } from './../../services/classes-of-children.service';
import { CreationStep, GroupOfChildren } from 'src/app/models/classOfChildrenModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-class',
  templateUrl: './create-new-class.component.html',
  styleUrls: ['./create-new-class.component.sass']
})
export class CreateNewClassComponent implements OnInit {
  @Input() newClassInput: string = '';
  creationStep: CreationStep = "classname";
  newGroups: GroupOfChildren[] = [];
  errorMsg: boolean = false;

  constructor(private classes: ClassesOfChildrenService, private router: Router) {}

  ngOnInit(): void {}

  addClass(className: string) {
    let newClassValidation = this.classes.validateClassName(className);

    if(newClassValidation === 'Valid') {
      this.classes.setNewClass(className);
      this.classes.selectClass(className);
      this.classes.setDifficulty(className, 'BASIC_1');
      this.creationStep = 'groups';
      this.errorMsg = false;
    } else {
      this.errorMsg = true;
    }
  }

  handleNewGroup(newGroups: GroupOfChildren[]) {
    this.newGroups = newGroups;
  }

  chooseDifficulty() {
    if(this.newGroups.length > 0) {
      this.classes.addGroups(this.classes.getSelectedClass()!.className, this.newGroups)
      this.creationStep = 'difficulty';
    }
  }

  introMovie() {
    this.classes.addGroups(this.classes.getSelectedClass()!.className, this.newGroups);
    this.router.navigate(['uitleg']);
  }
}
