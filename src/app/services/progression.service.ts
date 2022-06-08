// De functie van deze service is om de progressie van punten bij te houden van alle groepjes. Deze service biedt zijn
// diensten aan wanneer een spel gespeeld wordt. En reset zichzelf aan het begin van een nieuw spel.

import { Injectable } from '@angular/core';
import { GroupOfChildren } from '../models/classOfChildrenModel';
import { ClassesOfChildrenService } from './classes-of-children.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressionService {
  private newGroups: GroupOfChildren[] = []

  constructor(private classes: ClassesOfChildrenService) {}

  getGroups() {
    return this.newGroups;
  }

  setGroups(newGroups: GroupOfChildren[]) {
    this.newGroups = newGroups;
  }

  resetGroups() {
    let classGroups = this.classes.getSelectedClass()!.groups;
    let newGroups = classGroups.map((group) => {
      return {
        name: group.name,
        points: 0
      }
    })

    this.newGroups = newGroups;
  }
}
