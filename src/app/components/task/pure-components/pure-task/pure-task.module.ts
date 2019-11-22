import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureTaskComponent } from './pure-task.component';



@NgModule({
  declarations: [
    PureTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PureTaskComponent
  ]
})
export class PureTaskModule { }
