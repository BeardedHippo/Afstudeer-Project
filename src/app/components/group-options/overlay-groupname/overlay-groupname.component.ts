import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupOfChildren } from 'src/app/models/classOfChildrenModel';
import { nameChangeToggleType } from 'src/app/models/taskModels';

@Component({
  selector: 'app-overlay-groupname',
  templateUrl: './overlay-groupname.component.html',
  styleUrls: ['./overlay-groupname.component.sass']
})
export class OverlayGroupnameComponent implements OnInit {
  @Input() newGroupInput: string = '';
  @Input('selectedGroupName') selectedGroupName: string = '';
  @Input('newGroups') newGroups: GroupOfChildren[] = [];
  @Output() toggleChangeWindow: EventEmitter<nameChangeToggleType> = new EventEmitter();

  errorMsg: boolean = false

  constructor() {}

  ngOnInit(): void {}

  changeGroupName(oldGroupName: string, newGroupName: string) {
    let newNameExists = this.newGroups.some(group => group.name === newGroupName);

    if(newGroupName.length > 0 && newNameExists === false) {
      let indexOfGroup = this.newGroups.findIndex(groupsOfChildren => groupsOfChildren.name === oldGroupName);
      this.errorMsg = false;
      this.newGroups[indexOfGroup].name = newGroupName;
      this.toggleChangeWindow.emit({windowToggle: false, newGroups: this.newGroups});
    } else {
      this.errorMsg = true;
    }
    
  }

  cancle() {
    this.errorMsg = false;
    this.toggleChangeWindow.emit({windowToggle: false});
  }
}
