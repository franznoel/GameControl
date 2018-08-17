import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  intervalId = 0;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onGameStart() {
    console.log("start");
    this.intervalId = setInterval(() => {
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    }, 1000);
    console.log('Interval: ' + this.intervalId);
  }

  onGameStop() {
    console.log("stop", this.intervalId);
    clearInterval(this.intervalId);
  }

}
