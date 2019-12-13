import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './components/task/task.module';
import { NgxsModule } from '@ngxs/store';
import { TaskListComponent } from './components/task/containers/task-list/task-list.component';
import { InboxComponent } from './pages/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    InboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    NgxsModule.forRoot([]),
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
