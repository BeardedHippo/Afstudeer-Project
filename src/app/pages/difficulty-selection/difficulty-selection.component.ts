import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassOfChildren } from 'src/app/models/classOfChildrenModel';
import { Difficulty, ValidDifficulty } from 'src/app/models/difficultyModels';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-difficulty-selection',
  templateUrl: './difficulty-selection.component.html',
  styleUrls: ['./difficulty-selection.component.sass']
})
export class DifficultySelectionComponent implements OnInit {
  allDifficulties: Difficulty[] = Difficulty.allDifficulties();
  currentClass: ClassOfChildren | undefined = this.classes.getSelectedClass();
  
  constructor(private classes: ClassesOfChildrenService, private router: Router) { 
    if(!classes.getSelectedClass()) {
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
  }

  setDifficulty(newDifficulty: string) {
    let validDifficulty = newDifficulty as ValidDifficulty;
    this.classes.setDifficulty(this.currentClass!.className, validDifficulty);
    this.router.navigate(['boardroom'])
  }
}
