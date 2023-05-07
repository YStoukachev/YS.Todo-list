import * as React from "react";
import { Button } from "../../shared-components/button";
import { ToDoListItemModel } from "../../models/todo-list-item";
import { CheckBox } from "../../shared-components/check-box";
import "./index.css";

interface IProps {
  item: ToDoListItemModel;
  deleteItemHandler(item: ToDoListItemModel): void;
  importantItemHandler(id: string, newValue: boolean): void;
  markAsDoneHandler(id: string, newValue: boolean): void;
}

export const ToDoListItem: React.FC<IProps> = (props) => {
  const { item, deleteItemHandler, importantItemHandler, markAsDoneHandler } =
    props;
  const importantStyle = {
    color: item.important ? "red" : "black",
  };

  const className = `${item.important ? "red" : "black"} ${
    item.done && "crossed"
  }`;

  const checkBoxClickHandler = (newValue: boolean) => {
    markAsDoneHandler(item.id, newValue);
  };

  return (
    <div>
      <span>
        <CheckBox checked={item.done} onChangeHandler={checkBoxClickHandler} />
      </span>
      <span className={className}>{item.label}</span>
      <span>
        <Button
          className="btn btn-danger"
          value="Delete"
          onClickHandler={() => deleteItemHandler(item)}
        />
      </span>
      <span>
        <Button
          className="btn btn-warning"
          value="Important"
          onClickHandler={() => importantItemHandler(item.id, !item.important)}
        />
      </span>
    </div>
  );
};
