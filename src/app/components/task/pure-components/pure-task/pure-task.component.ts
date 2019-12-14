import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TaskStates} from '../../enums/task-state.enum';
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-pure-task',
  templateUrl: './pure-task.component.html',
  styleUrls: ['./pure-task.component.scss']
})
export class PureTaskComponent implements OnInit {
  title: string;
  taskStates = TaskStates;

  @Input() task: Task;

  @Output() pinTask = new EventEmitter<number>();
  @Output() archiveTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPin(id: number) {
    this.pinTask.emit(id);
  }

  onArchive(id: number) {
    this.archiveTask.emit(id);
  }
}
