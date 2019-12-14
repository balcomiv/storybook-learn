import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './components/task/task.module';
import { NgxsModule } from '@ngxs/store';
import { TaskListComponent } from './components/task/containers/task-list/task-list.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { PureInboxComponent } from './pages/inbox/pure-inbox/pure-inbox.component';
import { InboxModule } from './pages/inbox/inbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InboxModule,
    NgxsModule.forRoot([]),
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
