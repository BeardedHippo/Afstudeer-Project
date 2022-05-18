import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-close',
  templateUrl: './confirm-close.component.html',
  styleUrls: ['./confirm-close.component.sass']
})
export class ConfirmCloseComponent implements OnInit {
  @Output() toggleCloseWindow: EventEmitter<boolean> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.toggleCloseWindow.emit(false);
  }

  closeTask() {
    this.router.navigate(['boardroom']);
  }
}
