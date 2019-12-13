import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureTaskListComponent } from './pure-components/pure-task-list/pure-task-list.component';
import { PureTaskComponent } from './pure-components/pure-task/pure-task.component';
import { NgxsModule } from '@ngxs/store';
import { TasksState } from 'src/tasks/state/task.state';



@NgModule({
  imports: [
    CommonModule, NgxsModule.forFeature([TasksState])
  ],
  declarations: [
    PureTaskComponent,
    PureTaskListComponent
  ],
  exports: [
    PureTaskComponent,
    PureTaskListComponent
  ]
})
export class TaskModule { }
