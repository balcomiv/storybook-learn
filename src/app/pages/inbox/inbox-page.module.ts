import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { TaskModule } from '../../components/task/task.module';
import { PureInboxComponent } from './pure-inbox/pure-inbox.component';



@NgModule({
  declarations: [
    InboxComponent,
    PureInboxComponent
  ],
  imports: [
    CommonModule,
    TaskModule
  ],
  exports: [
    InboxComponent,
    PureInboxComponent
  ]
})
export class InboxPageModule { }
