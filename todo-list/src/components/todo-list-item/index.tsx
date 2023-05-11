import * as React from "react";
import { Button } from "../../shared-components/button";
import { IToDoListItemModel } from "../../models/todo-list-item";
import { CheckBox } from "../../shared-components/check-box";
import "./index.css";

interface IProps {
  item: IToDoListItemModel;
  onDelete: (id: string) => void;
  onUpdate: (
    id: string,
    newValue: Partial<Omit<IToDoListItemModel, "id">>
  ) => void;
}

export const ToDoListItem: React.FC<IProps> = (props) => {
  const { item, onDelete, onUpdate } = props;

  const className = `${item.important ? "red" : "black"} ${
    item.done && "crossed"
  }`;

  return (
    <div>
      <span>
        <CheckBox
          checked={item.done}
          onChange={(done) => onUpdate(item.id, { done })}
        />
      </span>
      <span className={className}>{item.label}</span>
      <span>
        <Button
          className="btn btn-danger"
          value="Delete"
          onClick={() => onDelete(item.id)}
        />
      </span>
      <span>
        <Button
          className="btn btn-warning"
          value="Important"
          onClick={() => onUpdate(item.id, { important: !item.important })}
        />
      </span>
    </div>
  );
};
