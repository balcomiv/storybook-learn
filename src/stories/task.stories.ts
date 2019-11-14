import { moduleMetadata } from '@storybook/angular';
import { TaskComponent, TaskState, Task } from 'src/app/components/task/task.component';
import { action } from '@storybook/addon-actions';

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
            declarations: [TaskComponent]
        })
    ]
}

export const Inbox = () => ({
    component: TaskComponent,
    props: {
        task: task,
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
})

export const Pinned = () => ({
    component: TaskComponent,
    props: {
        task: {...task, title: 'Pinned Task', state: TaskState.Pinned},
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
})

export const Archived = () => ({
    template: `<app-task-item [task]=task ></app-task-item>`,
    props: {
        task: {...task, title: 'Archived Task', state: TaskState.Archived},
        onPinTask: action('onPinTask'),
        onArchiveTask: action('onArchiveTask')
    }
})