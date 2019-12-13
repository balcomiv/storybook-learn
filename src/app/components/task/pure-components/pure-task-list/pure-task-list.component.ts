import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { TaskStates } from '../../enums/task-state.enum';


@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.scss']
})
export class PureTaskListComponent implements OnInit {
  tasksInOrder: Task[] = [];

  @Input() set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === TaskStates.Pinned),
      ...arr.filter(t => t.state !== TaskStates.Pinned),
    ];
  }

  @Input() loading = false;
  @Output() onPinTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
