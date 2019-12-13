import { State, Selector, Action, StateContext, Select } from '@ngxs/store';
import { Task } from 'src/app/components/task/interfaces/task.model';
import { TaskStates } from 'src/app/components/task/enums/task-state.enum';


export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};

export class ArchiveTask {
  static readonly type = actions.ARCHIVE_TASK;

  constructor(public payload: number) {}
}

export class PinTask {
  static readonly type = actions.PIN_TASK;

  constructor(public payload: number) {}
}

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = {
  1: { id: 1, title: 'Something', state: TaskStates.Inbox },
  2: { id: 2, title: 'Something more', state: TaskStates.Inbox },
  3: { id: 3, title: 'Something else', state: TaskStates.Inbox },
  4: { id: 4, title: 'Something again', state: TaskStates.Inbox },
};

export class TaskStateModel {
  entities: { [id: number]: Task };
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    entities: defaultTasks,
  },
})
export class TasksState {
  @Selector()
  static getAllTasks(state: TaskStateModel) {
    const entities = state.entities;
    return Object.keys(entities).map(id => entities[+id]);
  }

  @Action(PinTask)
  pinTask({ patchState, getState }: StateContext<TaskStateModel>, { payload }: PinTask) {
    const state = getState().entities;

    const entities = {
      ...state,
      [payload]: { ...state[payload], state: TaskStates.Pinned },
    };

    patchState({
      entities,
    });
  }

  @Action(ArchiveTask)
  archiveTask({ patchState, getState }: StateContext<TaskStateModel>, { payload }: ArchiveTask) {
    const state = getState().entities;

    const entities = {
      ...state,
      [payload]: { ...state[payload], state: TaskStates.Archived },
    };

    patchState({
      entities,
    });
  }


  @Selector()
  static getError() {
    return "";
  }
}