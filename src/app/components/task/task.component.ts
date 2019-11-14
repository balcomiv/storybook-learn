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
  selector: 'app-task-item',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
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
