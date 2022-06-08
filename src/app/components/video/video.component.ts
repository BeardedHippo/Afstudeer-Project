// Een herbruikbare video component

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  @Input('videoUri') videoUri: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
