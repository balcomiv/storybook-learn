import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TaskStates} from '../../enums/task-state.enum';
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-pure-task-item',
  templateUrl: './pure-task.component.html',
  styleUrls: ['./pure-task.component.scss']
})
export class PureTaskComponent implements OnInit {
  title: string;
  taskState = TaskStates;

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
