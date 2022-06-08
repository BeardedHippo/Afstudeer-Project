// Dit is een popup voor het veranderen van een klasnaam, dit wordt vertoond door een event te emitten van en naar de pagina

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassesOfChildrenService } from 'src/app/services/classes-of-children.service';

@Component({
  selector: 'app-overlay-classname',
  templateUrl: './overlay-classname.component.html',
  styleUrls: ['./overlay-classname.component.sass']
})
export class OverlayClassnameComponent implements OnInit {
  @Input() newClassInput: string = '';
  @Input('selectedClassName') selectedClassName: string | undefined;
  @Output() toggleChangeWindow: EventEmitter<boolean> = new EventEmitter();

  errorMsg: boolean = false

  constructor(private classes: ClassesOfChildrenService) {}

  ngOnInit(): void {}

  changeClassname(newClassname: string) {
    let newClassValidation = this.classes.validateClassName(newClassname);

    if(newClassname.length > 0 && newClassValidation === 'Valid') {
      this.classes.setClassName(this.selectedClassName!, newClassname)
      this.errorMsg = false;
      this.toggleChangeWindow.emit(false);
    } else {
      this.errorMsg = true;
    }
    
  }

  cancle() {
    this.errorMsg = false;
    this.toggleChangeWindow.emit(false);
  }
}
