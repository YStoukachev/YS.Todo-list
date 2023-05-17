import { configureStore } from "@reduxjs/toolkit";
import todoList from "./reducers/todo.reducer";
import { localStorageMiddleware } from "../middlewares/local-storage.middleware";

export const store = configureStore({
  reducer: {
    todoList,
  },
  middleware: [localStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
