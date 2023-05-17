import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useCallback, useMemo } from "react";

export interface ITask {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
}

export interface ITaskFilter {
  label?: string;
  onlyDone?: boolean;
  onlyImportant?: boolean;
  onlyActive?: boolean;
}

export interface ITodoList {
  list: ITask[];
  filters: ITaskFilter;
}

const initialState: ITodoList = {
  list: [],
  filters: {},
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, { payload }: { payload: ITask }) => {
      state.list.push(payload);
    },
    deleteTask: (state, { payload }: { payload: string }) => {
      state.list = state.list.filter(({ id }) => id !== payload);
    },
    updateTask: (state, { payload }: { payload: ITask }) => {
      const index = state.list.findIndex((task) => task.id === payload.id);
      state.list[index] = payload;
    },
    updateFilters: (state, { payload }: { payload: ITaskFilter }) => {
      state.filters = payload;
    },
    deleteCompletedTasks: (state) => {
      state.list = state.list.filter((x) => !x.done);
    },
  },
});

const { addTask, deleteTask, updateTask, updateFilters, deleteCompletedTasks } =
  todoListSlice.actions;

export const useTaskRemover = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (id: string) => {
      dispatcher(deleteTask(id));
    },
    [dispatcher]
  );
};

export const useTaskAdder = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (task: Omit<ITask, "id">) => {
      dispatcher(addTask({ ...task, id: crypto.randomUUID() }));
    },
    [dispatcher]
  );
};

export const useTaskUpdater = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (task: ITask) => {
      dispatcher(updateTask(task));
    },
    [dispatcher]
  );
};

export const useFilterUpdater = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (filters: ITaskFilter) => {
      dispatcher(updateFilters(filters));
    },
    [dispatcher]
  );
};

export const useFilteredTaskList = () => {
  const [filters, toDoList] = useAppSelector(
    ({ todoList: { filters: filter, list } }) => [filter, list] as const
  );

  return useMemo(() => {
    const filteredTasks = toDoList.filter((item) => {
      let isValid = true;

      if (isValid && item.label) {
        isValid = item.label.toLocaleLowerCase().includes(filters.label || "");
      }

      if (isValid) {
        isValid = filters.onlyDone ? item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyActive ? !item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyImportant ? item.important : true;
      }

      return isValid;
    });

    return {
      filteredTasks,
      filters,
    };
  }, [filters, toDoList]);
};

export const useCompletedTaskRemover = () => {
  const dispatcher = useAppDispatch();

  return useCallback(() => {
    dispatcher(deleteCompletedTasks());
  }, [dispatcher]);
};

export default todoListSlice.reducer;
