import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, TaskState } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasksInOrder: Task[] = [];

  @Input() set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === TaskState.Pinned),
      ...arr.filter(t => t.state !== TaskState.Pinned),
    ];
  }

  @Input() loading = false;
  @Output() onPinTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
