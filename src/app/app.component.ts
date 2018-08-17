import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  @Input() lastNumber: number = 0;

  title = 'app';

  onIntervalFired(firedNumber: number) {
    if (firedNumber%2 === 1) {
      this.oddNumbers.push(firedNumber)
    } else {
      this.evenNumbers.push(firedNumber);
    }
  }

}
