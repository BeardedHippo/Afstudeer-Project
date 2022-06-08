// Een simpele pagina met een filmpje dat als 'tutorial' zou functioneren.

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.sass']
})
export class TutorialComponent implements OnInit {
  tutorialUri: string = "tutorial.mp4";

  constructor(private router: Router, private classes: ClassesOfChildrenService) {}

  ngOnInit(): void {
    if(!this.classes.getSelectedClass()) {
      this.router.navigate(['/']);
    }
  }
}
