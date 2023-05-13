import { IToDoListFilter } from "../../models/todo-list-filter";
import { IToDoListItemModel } from "../../models/todo-list-item";
import { IAction } from "../actions/action-models/action";
import { IUpdateTask } from "../actions/action-models/update-task";
import {
  ADD_TASK,
  CLEAR_COMPLETED_TASKS,
  DELETE_TASK,
  RESET_FILTERS,
  SET_FILTERS,
  UPDATE_TASK,
} from "../actions/todo-action-types";
import { IAppState } from "../app-state";

const initialState: IAppState = {
  toDoListState: [],
  filters: {},
};

export const reducer = (
  state: IAppState = initialState,
  action: IAction<any>
): IAppState => {
  switch (action.type) {
    case ADD_TASK: {
      return addTask(state, action.payload);
    }
    case DELETE_TASK: {
      return deleteTask(state, action.payload);
    }
    case UPDATE_TASK: {
      return updateTask(state, action.payload);
    }
    case SET_FILTERS: {
      return setFilters(state, action.payload);
    }
    case RESET_FILTERS: {
      return resetFilters(state, action.payload);
    }
    case CLEAR_COMPLETED_TASKS: {
      return clearCompletedTasks(state);
    }
    default:
      return state;
  }
};

const addTask = (prevState: IAppState, item: IToDoListItemModel): IAppState => {
  return {
    ...prevState,
    toDoListState: [...prevState.toDoListState, item],
  };
};

const deleteTask = (prevState: IAppState, id: string): IAppState => {
  return {
    ...prevState,
    toDoListState: prevState.toDoListState.filter((item) => item.id !== id),
  };
};

const updateTask = (
  prevState: IAppState,
  updatePayload: IUpdateTask
): IAppState => {
  const { id, updates } = updatePayload;

  return {
    ...prevState,
    toDoListState: prevState.toDoListState.map((item) =>
      item.id === id ? { ...item, ...updates, id: id } : item
    ),
  };
};

const setFilters = (
  prevState: IAppState,
  filters: Partial<IToDoListFilter>
): IAppState => {
  return {
    ...prevState,
    filters: { ...filters },
  };
};

const resetFilters = (
  prevState: IAppState,
  filters: IToDoListFilter
): IAppState => {
  return {
    ...prevState,
    filters: filters,
  };
};

const clearCompletedTasks = (prevState: IAppState): IAppState => {
  return {
    ...prevState,
    toDoListState: prevState.toDoListState.filter((x) => !x.done),
  };
};
