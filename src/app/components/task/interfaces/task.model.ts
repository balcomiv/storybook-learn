import { TaskStates } from '../enums/task-state.enum';

export interface Task {
    id: number,
    title: string,
    state: TaskStates,
    updateDate?: Date
  }