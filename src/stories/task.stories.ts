import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { Task, TaskState, PureTaskComponent } from 'src/app/components/task/pure-components/pure-task/pure-task.component';
import { PureTaskModule } from 'src/app/components/task/pure-components/pure-task/pure-task.module';

const task: Task = {
    id: 1,
    title: 'Inbox Task',
    state: TaskState.Inbox,
    updateDate: new Date(2019, 0, 1, 9, 0)
}

// stories.addDecorator(
//     moduleMetadata({
//         imports: [MatMenuModule],
//     })
// );

//  Default
export default {
    title: "Learn SB | Task",
    decorators: [
        moduleMetadata({
            // declarations: [PureTaskComponent]
            imports: [PureTaskModule]
        })
    ]
}

export const Inbox = () => ({
    component: PureTaskComponent,
    props: {
        task: task,
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
})

export const Pinned = () => ({
    component: PureTaskComponent,
    props: {
        task: {...task, title: 'Pinned Task', state: TaskState.Pinned},
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
})

export const Archived = () => ({
    template: `<app-pure-task-item [task]=task ></app-pure-task-item>`,
    props: {
        task: {...task, title: 'Archived Task', state: TaskState.Archived},
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
})