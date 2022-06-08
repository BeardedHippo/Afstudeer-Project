// Dit component brengt een scherm met de opties om groepen aan te passen

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ClassOfChildren, GroupOfChildren } from 'src/app/models/classOfChildrenModel';
import { nameChangeToggleType } from 'src/app/models/taskModels';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-group-options',
  templateUrl: './group-options.component.html',
  styleUrls: ['./group-options.component.sass']
})
export class GroupOptionsComponent implements OnInit {
  currentClass: ClassOfChildren | undefined;
  newGroups: GroupOfChildren[] = [];
  nameChangeWindow: boolean = false;
  selectedGroupName: string = ''
  manageBarActive: string[] = [];
  errorMsg: boolean = false;
  
  @Input() newGroupnameInput: string = '';
  @Output() handleNewGroup: EventEmitter<GroupOfChildren[]> = new EventEmitter();

  constructor(private classes: ClassesOfChildrenService) {
    this.currentClass = this.classes.getSelectedClass();
    this.currentClass!.groups.forEach(group => this.newGroups.push(group));
  }

  ngOnInit(): void {}

  addGroup(groupName: string) {
    let newGroupExists = this.newGroups.some(group => group.name === groupName);

    if (newGroupExists === false && this.newGroups.length !== 8 && groupName.length > 0) {

      let newGroup = {
        name: groupName,
        points: 0
      }

      this.errorMsg = false;
      this.newGroups.push(newGroup);
      this.handleNewGroup.emit(this.newGroups);
      this.newGroupnameInput = '';

    } else {
      this.errorMsg = true;
    }
  }

  deactivateNameChange(value: nameChangeToggleType) {
    if(value.newGroups) {
      this.newGroups = value.newGroups;
      this.handleNewGroup.emit(this.newGroups);
    }
    
    this.nameChangeWindow = value.windowToggle;
  }

  activateNameChange(groupName: string) {
    this.selectedGroupName = groupName;
    this.nameChangeWindow = true;
  }

  removeGroup(groupName: string) {
      let indexOfGroup = this.newGroups.findIndex(groupsOfChildren => groupsOfChildren.name === groupName);
      this.newGroups.splice(indexOfGroup, 1);
      this.handleNewGroup.emit(this.newGroups);
  }

  activateManageBar(groupName: string) {
    if(this.manageBarActive.includes(groupName)) {
      let index = this.manageBarActive.indexOf(groupName);
      this.manageBarActive.splice(index, 1);
    } else {
      this.manageBarActive.push(groupName);
    }
  }

  checkGroupName(groupName: string) { 
    return this.manageBarActive.includes(groupName);
  }
}
