import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupOfChildren } from 'src/app/models/classOfChildrenModel';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.sass']
})
export class ManageGroupsComponent implements OnInit {
  newGroups: GroupOfChildren[] = [];

  constructor(private router: Router, private classes: ClassesOfChildrenService) {
    if(!classes.getSelectedClass()) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }
  
  handleNewGroup(newGroups: GroupOfChildren[]) {
    this.newGroups = newGroups;
  }

  saveGroups() {
    if(this.newGroups.length > 0) {
      this.classes.addGroups(this.classes.getSelectedClass()!.className, this.newGroups);
      this.router.navigate(['scores']);
    } else {
      console.log('Atleast 1 group');
    } 
  }
}
