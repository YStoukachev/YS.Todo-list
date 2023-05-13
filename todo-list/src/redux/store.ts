import { createStore } from "redux";
import { reducer } from "./reducers/todo-reducer";

export const store = createStore(reducer);
