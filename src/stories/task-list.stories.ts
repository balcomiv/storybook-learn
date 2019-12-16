import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { PureTaskListModule } from 'src/app/components/task/pure-components/pure-task-list/pure-task-list.module';
import { TaskStates } from '../app/components/task/enums/task-state.enum';
import { Task } from '../app/components/task/interfaces/task.model';
import { TasksState } from 'src/tasks/state/task.state';
import { NgxsModule, Store } from '@ngxs/store';
import { TaskModule } from 'src/app/components/task/task.module';
import { PureTaskModule } from 'src/app/components/task/pure-components/pure-task/pure-task.module';
import { environment } from 'src/environments/environment';

const task: Task = {
    id: 1,
    title: 'Inbox Task',
    state: TaskStates.Inbox,
    updateDate: new Date(2019, 0, 1, 9, 0)
};

const defaultTasks = [
    { ...task, id: '1', title: 'Task 1' },
    { ...task, id: '2', title: 'Task 2' },
    { ...task, id: '3', title: 'Task 3' },
    { ...task, id: '4', title: 'Task 4' },
    { ...task, id: '5', title: 'Task 5' },
    { ...task, id: '6', title: 'Task 6' },
];

const withPinnedTasks = [
    ...defaultTasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

const props = {
    tasks: defaultTasks,
    pinTask: action('pinTask'),
    archiveTask: action('archiveTask')
};

export default {
    title: 'Learn SB | Task List',
    decorators: [
        moduleMetadata({
            // declarations: [PureTaskListComponent],
            // imports: [PureTaskListModule]
            imports: [
                TaskModule, 
                NgxsModule.forRoot([TasksState], { developmentMode: !environment.production })
            ],
            providers: [Store],
        })
    ]
};

export const Default = () => ({
    template: `
        <div style="padding: 3rem">
            <app-pure-task-list [tasks]="tasks"
            (pinTask)="pinTask($event)"
            (archiveTask)="archiveTask($event)"></app-pure-task-list>
        </div>
    `,
    props
});

export const WithPinned = () => ({
    template: `
        <div style="padding: 3rem">
            <app-pure-task-list [tasks]="tasks"
            (pinTask)="pinTask($event)"
            (archiveTask)="archiveTask($event)"></app-pure-task-list>
        </div>
    `,
    props: {
        ...props,
        tasks: withPinnedTasks
    }
});

export const Loading = () => ({
    template: `
        <div style="padding: 3rem">
            <app-pure-task-list [tasks]="[]"
            [loading]=true
            (pinTask)="pinTask($event)"
            (archiveTask)="archiveTask($event)"></app-pure-task-list>
        </div>
    `,
    props
});

export const Empty = () => ({
    template: `
        <div style="padding: 3rem">
            <app-pure-task-list [tasks]="[]"
            (pinTask)="pinTask($event)"
            (archiveTask)="archiveTask($event)"></app-pure-task-list>
        </div>
    `,
    props
});

export const SmartContainer = () => ({
    template: `
        <div style="padding: 3rem">
            <app-task-list></app-task-list>
        </div>
    `,

})
