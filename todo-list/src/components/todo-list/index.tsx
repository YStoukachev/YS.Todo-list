import * as React from "react";
import { ToDoListItem } from "../todo-list-item";
import { IToDoListItemModel } from "../../models/todo-list-item";
import "./index.css";

interface IProps {
  toDoList: IToDoListItemModel[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, item: Partial<Omit<IToDoListItemModel, "id">>) => void;
}

export const ToDoList: React.FC<IProps> = (props) => {
  const { toDoList = [], onDelete, onUpdate } = props;

  return (
    <div className="margin-top">
      <ul className="list-group to-do-list-container">
        {Boolean(toDoList.length) &&
          toDoList.map((element) => (
            <li key={element.id} className="list-group-item">
              <ToDoListItem
                item={element}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            </li>
          ))}
        {!Boolean(toDoList.length) && <div>There is nothing to do</div>}
      </ul>
    </div>
  );
};
