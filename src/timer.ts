import { Component } from '@angular/core';

@Component({
  selector: 'angular2-timer',
  template: `
    <div>{{ date }}</div>
  `
})

export class Timer {

  date = new Date();

  constructor() {

    setInterval(() => { this.date = new Date(); }, 1000);
  }
}
