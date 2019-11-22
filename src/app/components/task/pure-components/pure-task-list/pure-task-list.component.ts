import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, TaskState } from '../pure-task/pure-task.component';


@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.scss']
})
export class PureTaskListComponent implements OnInit {
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
