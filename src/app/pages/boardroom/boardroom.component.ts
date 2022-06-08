// Dit is de boardroom van het spel. Dit is de plek waarbij alle taken die gespeeld worden aangeklikt kunnen worden.

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-boardroom',
  templateUrl: './boardroom.component.html',
  styleUrls: ['./boardroom.component.sass']
})
export class BoardroomComponent implements OnInit {

  constructor(private router: Router, private classes: ClassesOfChildrenService) {
  if(!classes.getSelectedClass()) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }

}
