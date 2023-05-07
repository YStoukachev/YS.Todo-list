import * as React from "react";
import { Button } from "../../shared-components/button";
import { ToDoListItemModel } from "../../models/todo-list-item";
import { CheckBox } from "../../shared-components/check-box";

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

  const checkBoxClickHandler = (newValue: boolean) => {
    markAsDoneHandler(item.id, newValue);
  };

  return (
    <div>
      <span>
        <CheckBox checked={item.done} onChangeHandler={checkBoxClickHandler} />
      </span>
      <span style={importantStyle}>{item.label}</span>
      <span>
        <Button value="Delete" onClickHandler={() => deleteItemHandler(item)} />
      </span>
      <span>
        <Button
          value="Important"
          onClickHandler={() => importantItemHandler(item.id, !item.important)}
        />
      </span>
    </div>
  );
};
