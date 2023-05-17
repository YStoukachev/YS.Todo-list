import { useEffect } from "react";
import { ToDoListItem } from "../todo-list-item";
import "./index.css";
import {
  useFilteredTaskList,
  useTodoListSetter,
} from "../../redux/reducers/todo.reducer";
import { useTodoLoader } from "../../hooks/to-do-list-loader.hook";

export const ToDoList = () => {
  const { getTodoList } = useTodoLoader();
  const setTodoList = useTodoListSetter();
  useEffect(() => setTodoList(getTodoList()), []);
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
