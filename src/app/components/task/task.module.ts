import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureTaskListComponent } from './pure-components/pure-task-list/pure-task-list.component';
import { PureTaskComponent } from './pure-components/pure-task/pure-task.component';
import { NgxsModule } from '@ngxs/store';
import { TasksState } from 'src/tasks/state/task.state';
import { TaskListComponent } from './containers/task-list/task-list.component';
import { PureTaskModule } from './pure-components/pure-task/pure-task.module';
import { PureTaskListModule } from './pure-components/pure-task-list/pure-task-list.module';



@NgModule({
  imports: [
    CommonModule, 
    NgxsModule.forFeature([TasksState]),
    PureTaskListModule,
    PureTaskModule
  ],
  declarations: [
    TaskListComponent,
  ],
  exports: [
    TaskListComponent,
    PureTaskListComponent
  ]
})
export class TaskModule { }
