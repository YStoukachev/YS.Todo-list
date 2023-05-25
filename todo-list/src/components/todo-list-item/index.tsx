import * as React from "react";
import { Button } from "../../shared-components/button";
import { CheckBox } from "../../shared-components/check-box";
import "./index.css";
import { ITask } from "../../redux/reducers/todo.reducer";
import { useTaskRemover, useTaskUpdater } from "../../redux/hooks/todo.hook";

interface IProps {
  item: ITask;
}

export const ToDoListItem: React.FC<IProps> = (props) => {
  const { item } = props;

  const deleteTask = useTaskRemover();
  const updateTask = useTaskUpdater();

  const labelClassName = `margin-left to-do-label ${
    item.important ? "red" : "black"
  } ${item.done && "crossed"}`;

  return (
    <div className="row-container">
      <span className="item-checkbox">
        <CheckBox
          checked={item.done}
          onChange={(done) => updateTask({ ...item, done })}
        />
      </span>
      <span className={labelClassName}>{item.label}</span>
      <span className="margin-left">
        <Button
          className="btn btn-warning"
          value="Important"
          onClick={() => updateTask({ ...item, important: !item.important })}
          isIcon={true}
          iconType="warning"
        />
      </span>
      <span className="margin-left">
        <Button
          className="btn btn-danger"
          value="Delete"
          onClick={() => deleteTask(item.id)}
          isIcon={true}
          iconType="trash"
        />
      </span>
    </div>
  );
};
