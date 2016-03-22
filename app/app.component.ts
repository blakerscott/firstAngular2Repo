import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div *ngFor="#task of tasks">
<h3>{{ task.description }}</h3>
<h4> Hi, I'm another nested HTML element. There are 4 copies of me because we have 4 tasks.</h4>
</div>
  `
})
export class AppComponent {
  public tasks: Task[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
