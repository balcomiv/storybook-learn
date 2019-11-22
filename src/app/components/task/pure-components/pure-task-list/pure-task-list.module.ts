import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureTaskListComponent } from './pure-task-list.component';
import { PureTaskModule } from '../pure-task/pure-task.module';



@NgModule({
  declarations: [
    PureTaskListComponent
  ],
  imports: [
    CommonModule,
    PureTaskModule
  ],
  exports: [
    PureTaskListComponent
  ]
})
export class PureTaskListModule { }
