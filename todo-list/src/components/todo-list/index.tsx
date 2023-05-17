import * as React from "react";
import { ToDoListItem } from "../todo-list-item";
import "./index.css";
import { useFilteredTaskList } from "../../redux/reducers/todo.reducer";

interface IProps {}

export const ToDoList: React.FC<IProps> = (props) => {
  const { filteredTasks } = useFilteredTaskList();

  return (
    <div className="margin-top">
      <ul className="list-group to-do-list-container">
        {Boolean(filteredTasks.length) &&
          filteredTasks.map((element) => (
            <li key={element.id} className="list-group-item">
              <ToDoListItem item={element} />
            </li>
          ))}
        {!Boolean(filteredTasks.length) && <div>There is nothing to do</div>}
      </ul>
    </div>
  );
};
