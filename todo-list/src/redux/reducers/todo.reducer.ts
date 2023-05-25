import { createSlice } from "@reduxjs/toolkit";

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
    setTodoList: (state, { payload }: { payload: ITask[] }) => {
      state.list = payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
  updateFilters,
  deleteCompletedTasks,
  setTodoList,
} = todoListSlice.actions;

export default todoListSlice.reducer;
