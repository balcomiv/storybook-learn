import { moduleMetadata } from '@storybook/angular';
import { boolean /*, object, select, text, withKnobs*/ } from '@storybook/addon-knobs';
import { InboxPageModule } from '../app/pages/inbox/inbox-page.module';
import { InboxComponent } from '../app/pages/inbox/inbox.component';
import { PureInboxComponent } from '../app/pages/inbox/pure-inbox/pure-inbox.component';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from 'src/tasks/state/task.state';
import { TaskModule } from '../app/components/task/task.module';


export default {
    title: 'Learn SB | Inbox Screen',
    decorators: [
        moduleMetadata({
            imports: [TaskModule, NgxsModule.forRoot([TasksState])],
            providers: [Store],
            declarations: [InboxComponent, PureInboxComponent]
        })
    ]
};


export const Container = () => ({
    template: `<app-inbox></app-inbox>`,
});

export const Pure = () => ({
    template: `<app-pure-inbox></app-pure-inbox>`,
    props: {
        error: boolean('Error Loading Data', false)
    }
});
