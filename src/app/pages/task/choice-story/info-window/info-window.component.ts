import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.sass']
})
export class InfoWindowComponent implements OnInit {
  @Input('explaination') explaination: string = '';
  @Output() closeInfoWindow: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  closeWindow() {
    this.closeInfoWindow.emit(false);
  }

}
