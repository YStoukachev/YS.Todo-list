import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../redux/app-state";
import { IToDoListItemModel } from "../../models/todo-list-item";
import * as toDoActions from "../../redux/actions/todo-actions";
import { IToDoListFilter } from "../../models/todo-list-filter";
import { ToDoListItem } from "../todo-list-item";

interface IProps {
  toDoList: IToDoListItemModel[];
  filters: IToDoListFilter;
  deleteTask: (id: string) => void;
  updateTask: (
    id: string,
    updates: Partial<Omit<IToDoListItemModel, "id">>
  ) => void;
}

const ToDoListWithRedux: React.FC<IProps> = (props) => {
  const { toDoList, deleteTask, updateTask, filters } = props;

  let toDoListProjection = [...toDoList];

  if (Boolean(filters)) {
    toDoListProjection = toDoList.filter((item) => {
      let isValid = true;

      if (isValid && item.label) {
        isValid = item.label.toLocaleLowerCase().includes(filters.label || "");
      }

      if (isValid) {
        isValid = filters.onlyDone ? item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyActive ? !item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyImportant ? item.important : true;
      }

      return isValid;
    });
  }

  return (
    <div className="margin-top">
      <ul className="list-group to-do-list-container">
        {Boolean(toDoListProjection.length) &&
          toDoListProjection.map((element) => (
            <li key={element.id} className="list-group-item">
              <ToDoListItem
                item={element}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
            </li>
          ))}
        {!Boolean(toDoListProjection.length) && (
          <div>There is nothing to do</div>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: IAppState): IProps => {
  return {
    toDoList: state.toDoListState,
    filters: state.filters,
    deleteTask: () => {},
    updateTask: () => {},
  };
};

export default connect(mapStateToProps, toDoActions)(ToDoListWithRedux);
