import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-exit',
  templateUrl: './confirm-exit.component.html',
  styleUrls: ['./confirm-exit.component.sass']
})
export class ConfirmExitComponent implements OnInit {

  @Output() exitConfirmWindow: EventEmitter<boolean> = new EventEmitter();

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  exitConfirmation() {
    this.exitConfirmWindow.emit(false)
  }

  toBoardroom() {
    this.route.navigate(['boardroom'])
  }

}
