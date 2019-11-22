import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

export interface Task {
  id: number,
  title: string,
  state: TaskState,
  updateDate: Date
}

export enum TaskState {
  Inbox,
  Pinned,
  Archived
}

@Component({
  selector: 'app-pure-task-item',
  templateUrl: './pure-task.component.html',
  styleUrls: ['./pure-task.component.scss']
})
export class PureTaskComponent implements OnInit {
  title: string;
  taskState = TaskState;

  @Input() task: Task;
  @Output() onPinTask = new EventEmitter<number>();
  @Output() onArchiveTask = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  onPin(id: number) {
    this.onPinTask.emit(id);
  }
  
  onArchive(id: number) {
    this.onArchiveTask.emit(id);
  }
}
