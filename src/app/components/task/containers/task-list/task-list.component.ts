import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/task.model';
import { TasksState, ArchiveTask, PinTask } from 'src/tasks/state/task.state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Select(TasksState.getAllTasks) task$: Observable<Task[]>;

  constructor(private store: Store) { }

  ngOnInit() {}

  archiveTask(id: number) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: number) {
    this.store.dispatch(new PinTask(id));
  }

}
