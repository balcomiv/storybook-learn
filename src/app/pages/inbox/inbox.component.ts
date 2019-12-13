import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TasksState } from 'src/tasks/state/task.state';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  @Select(TasksState.getError) error$: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
