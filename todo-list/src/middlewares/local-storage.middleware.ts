import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

export const TODO_LIST_KEY = "to-do-list-key";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState() as RootState;

    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(state.todoList.list));

    return result;
  };
