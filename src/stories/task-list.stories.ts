import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TaskComponent, TaskState, Task } from 'src/app/components/task/task.component';
import { TaskListComponent } from 'src/app/components/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { TaskModule } from 'src/app/components/task/task.module';

const task: Task = {
    id: 1,
    title: 'Inbox Task',
    state: TaskState.Inbox,
    updateDate: new Date(2019, 0, 1, 9, 0)
}

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
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTaks')
  };
  
export default {
    title: "Learn SB | Task List",
    decorators: [
        moduleMetadata({
            declarations: [TaskListComponent, TaskComponent],
            // imports: [TaskModule]
        })
    ]
}
export const Default = () => ({
    template: `
        <div style="padding: 3rem">
            <app-task-list [tasks]="tasks" 
            (onPinTask)="onPinTask($event)" 
            (onArchiveTask)="onArchiveTask($event)"></app-task-list>
        </div>
    `,
    props
})

export const WithPinned = () => ({
    template: `
        <div style="padding: 3rem">
            <app-task-list [tasks]="tasks" 
            (onPinTask)="onPinTask($event)" 
            (onArchiveTask)="onArchiveTask($event)"></app-task-list>
        </div>
    `,
    props: {
        ...props,
        tasks: withPinnedTasks
    }
})

export const Loading = () => ({
    template: `
        <div style="padding: 3rem">
            <app-task-list [tasks]="[]" 
            [loading]=true
            (onPinTask)="onPinTask($event)" 
            (onArchiveTask)="onArchiveTask($event)"></app-task-list>
        </div>
    `,
    props
})

export const Empty = () => ({
    template: `
        <div style="padding: 3rem">
            <app-task-list [tasks]="[]" 
            (onPinTask)="onPinTask($event)" 
            (onArchiveTask)="onArchiveTask($event)"></app-task-list>
        </div>
    `,
    props
})