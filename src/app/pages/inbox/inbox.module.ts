import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { PureInboxComponent } from './pure-inbox/pure-inbox.component';
import { TaskModule } from 'src/app/components/task/task.module';



@NgModule({
  imports: [
    CommonModule,
    TaskModule
  ],
  declarations: [
    InboxComponent,
    PureInboxComponent,
  ],
  // exports: [
  //   InboxComponent,
  //   PureInboxComponent
  // ]
})
export class InboxModule { }