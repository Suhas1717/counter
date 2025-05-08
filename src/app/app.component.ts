import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Counter Application';

  counter:number = 0;
  history: string[] = [];

  animation: boolean = false;
  actionType: string = '';

  incrementCounter(){
    this.counter++;
    this.historyLogger('[1] Counter is now ');
    this.setAnimation("bg-success p-3 rounded-circle")
  }

  decrementCounter(){
    this.counter--;
    this.historyLogger('[-1] Counter is now ');
    this.setAnimation("bg-warning p-3 rounded-circle")
  }

  resetCounterValue(){
    this.counter = 0;
    this.historyLogger('Reset Counter is now ');
    this.setAnimation("bg-danger p-3 rounded-circle")
  }

  historyLogger(val:string){
    this.history.unshift(`${val} ${this.counter}`)
  }

  clearHistoryLog(){
    this.history = [];
  }

  setAnimation(actionType:string){
    this.actionType = actionType;
    this.animation = true;
    setTimeout(() => {
      this.animation = false;
      this.actionType = '';
    }, 500)
  }

}
