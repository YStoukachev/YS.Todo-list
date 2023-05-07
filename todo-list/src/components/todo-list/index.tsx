import * as React from "react";
import { ToDoListItem } from "../todo-list-item";
import { ToDoListItemModel } from "../../models/todo-list-item";

interface IProps {
  toDoList?: ToDoListItemModel[];
  deleteItemHandler(item: ToDoListItemModel): void;
  importantItemHandler(id: string, newValue: boolean): void;
  markAsDoneHandler(id: string, newValue: boolean): void;
}

export const ToDoList: React.FC<IProps> = (props) => {
  const {
    toDoList = [],
    deleteItemHandler,
    importantItemHandler,
    markAsDoneHandler,
  } = props;

  return (
    <div>
      <ul className="list-group">
        {toDoList.length > 0 ? (
          toDoList.map((element, index) => (
            <li key={index} className="list-group-item">
              <ToDoListItem
                key={element.id}
                item={element}
                deleteItemHandler={deleteItemHandler}
                importantItemHandler={importantItemHandler}
                markAsDoneHandler={markAsDoneHandler}
              />
            </li>
          ))
        ) : (
          <div>There is nothing to do</div>
        )}
      </ul>
    </div>
  );
};
