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

  const labelClassName = `margin-left col-md-3 ${
    item.important ? "red" : "black"
  } ${item.done && "crossed"}`;

  return (
    <div className="row-container">
      <span>
        <CheckBox
          checked={item.done}
          onChange={(done) => onUpdate(item.id, { done })}
        />
      </span>
      <span className={labelClassName}>{item.label}</span>
      <span className="margin-left">
        <Button
          className="btn btn-danger"
          value="Delete"
          onClick={() => onDelete(item.id)}
          isIcon={true}
          iconType="trash"
        />
      </span>
      <span className="margin-left">
        <Button
          className="btn btn-warning"
          value="Important"
          onClick={() => onUpdate(item.id, { important: !item.important })}
          isIcon={true}
          iconType="warning"
        />
      </span>
    </div>
  );
};
