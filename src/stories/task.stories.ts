import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { PureTaskComponent } from 'src/app/components/task/pure-components/pure-task/pure-task.component';
import { PureTaskModule } from 'src/app/components/task/pure-components/pure-task/pure-task.module';
import { Task } from '../app/components/task/interfaces/task.model';
import { TaskStates } from '../app/components/task/enums/task-state.enum';

const task: Task = {
    id: 1,
    title: 'Inbox Task',
    state: TaskStates.Inbox,
    updateDate: new Date(2019, 0, 1, 9, 0)
};

// stories.addDecorator(
//     moduleMetadata({
//         imports: [MatMenuModule],
//     })
// );

//  Default
export default {
    title: 'Learn SB | Task',
    decorators: [
        moduleMetadata({
            // declarations: [PureTaskComponent]
            imports: [PureTaskModule]
        })
    ]
};

export const Inbox = () => ({
    component: PureTaskComponent,
    props: {
        task,
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
});

export const Pinned = () => ({
    component: PureTaskComponent,
    props: {
        task: {...task, title: 'Pinned Task', state: TaskStates.Pinned},
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
});

export const Archived = () => ({
    template: `<app-pure-task [task]=task ></app-pure-task>`,
    props: {
        task: {...task, title: 'Archived Task', state: TaskStates.Archived},
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
});
