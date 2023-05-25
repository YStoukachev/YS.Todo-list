import { RootState } from "../store";

export const selectTodoList = (state: RootState) => state.todoList.list;

export const selectTodoFilters = (state: RootState) => state.todoList.filters;
