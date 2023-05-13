import { IToDoListItemModel } from "../../../models/todo-list-item";

export interface IUpdateTask {
  id: string;
  updates: Partial<Omit<IToDoListItemModel, "id">>;
}
