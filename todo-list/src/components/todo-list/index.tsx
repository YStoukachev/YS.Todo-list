import { useEffect } from "react";
import { ToDoListItem } from "../todo-list-item";
import "./index.css";
import {
  useFilteredTaskList,
  useTodoListSetter,
} from "../../redux/reducers/todo.reducer";
import { useTodoLoader } from "../../hooks/to-do-list-loader.hook";
import React from "react";
import { SearchBar } from "../search-bar";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

export const ToDoList = () => {
  const { getTodoList } = useTodoLoader();
  const setTodoList = useTodoListSetter();
  // eslint-disable-next-line
  useEffect(() => setTodoList(getTodoList()), []);

  const { filteredTasks } = useFilteredTaskList();

  const onDragEnd = (result: DropResult) => {
    if (result.destination) {
      const items = Array.from(filteredTasks);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setTodoList(items);
    }
  };

  return (
    <div className="to-do-list">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="list-group to-do-list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTasks.length > 0 &&
                filteredTasks.map((element, index) => (
                  <Draggable
                    key={element.id}
                    draggableId={element.id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className="list-group-item list-item"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ToDoListItem item={element} />
                      </li>
                    )}
                  </Draggable>
                ))}
              {!filteredTasks.length && (
                <div className="empty-list">There is nothing to do</div>
              )}
              <li className="to-do-actions list-group-item">
                <SearchBar />
              </li>
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div>Drag and drop to reorder tasks.</div>
    </div>
  );
};
