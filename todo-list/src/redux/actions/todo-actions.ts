import { IToDoListFilter } from "../../models/todo-list-filter";
import { IToDoListItemModel } from "../../models/todo-list-item";
import { IAction } from "./action-models/action";
import { IUpdateTask } from "./action-models/update-task";
import {
  ADD_TASK,
  CLEAR_COMPLETED_TASKS,
  DELETE_TASK,
  RESET_FILTERS,
  SET_FILTERS,
  UPDATE_TASK,
} from "./todo-action-types";

export const addTask = (
  newTask: IToDoListItemModel
): IAction<IToDoListItemModel> => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id: string): IAction<string> => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const updateTask = (
  id: string,
  updates: Partial<Omit<IToDoListItemModel, "id">>
): IAction<IUpdateTask> => {
  return {
    type: UPDATE_TASK,
    payload: {
      id: id,
      updates: updates,
    },
  };
};

export const setFilters = (
  filters: Partial<IToDoListFilter>
): IAction<Partial<IToDoListFilter>> => {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
};

export const resetFilters = (): IAction<IToDoListFilter> => {
  return {
    type: RESET_FILTERS,
    payload: {},
  };
};

export const clearCompletedTasks = (): IAction<void> => {
  return {
    type: CLEAR_COMPLETED_TASKS,
  };
};
