import { IToDoListFilter } from "../models/todo-list-filter";
import { IToDoListItemModel } from "../models/todo-list-item";

export interface IAppState {
  toDoListState: IToDoListItemModel[];
  filters: IToDoListFilter;
}
