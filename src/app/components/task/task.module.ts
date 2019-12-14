import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureTaskListComponent } from './pure-components/pure-task-list/pure-task-list.component';
import { PureTaskComponent } from './pure-components/pure-task/pure-task.component';
import { NgxsModule } from '@ngxs/store';
import { TasksState } from 'src/tasks/state/task.state';
import { TaskListComponent } from './containers/task-list/task-list.component';



@NgModule({
  imports: [
    CommonModule, NgxsModule.forFeature([TasksState])
  ],
  declarations: [
    TaskListComponent,
    PureTaskListComponent,
    PureTaskComponent,
  ],
  exports: [
    TaskListComponent,
    PureTaskListComponent,
    PureTaskComponent,
  ]
})
export class TaskModule { }
