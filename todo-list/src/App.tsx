import * as React from "react";
import "./App.css";
import { Actions } from "./components/actions";
import { Header } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { ToDoList } from "./components/todo-list";
import { ToDoListItemModel } from "./models/todo-list-item";

const App = () => {
  const [toDoList, updateToDoList] = React.useState<ToDoListItemModel[]>([]);
  const [toDoListProjection, updateToDoListProjection] = React.useState<
    ToDoListItemModel[]
  >([]);

  const addItemToList = (item: ToDoListItemModel) => {
    updateToDoList((list) => [...list, item]);
    updateToDoListProjection((list) => [...list, item]);
  };

  const deleteItemFromList = (item: ToDoListItemModel) => {
    updateToDoList((list) => list.filter((x) => x.id !== item.id));
    updateToDoListProjection((list) => list.filter((x) => x.id !== item.id));
  };

  const markItemAsImportant = (id: string, newValue: boolean) => {
    updateToDoList((list) => doLogicForMarkAsImportant(list, id, newValue));
    updateToDoListProjection((list) =>
      doLogicForMarkAsImportant(list, id, newValue)
    );
  };

  const doLogicForMarkAsImportant = (
    items: ToDoListItemModel[],
    id: string,
    newValue: boolean
  ) => {
    const itemIndexToUpdate = items.findIndex((x) => x.id === id);
    const updatedItem: ToDoListItemModel = {
      ...items[itemIndexToUpdate],
      important: newValue,
    };
    const updatedItems = [...items];
    updatedItems[itemIndexToUpdate] = updatedItem;

    return updatedItems;
  };

  const doLogicForMarkAsDone = (
    items: ToDoListItemModel[],
    id: string,
    newValue: boolean
  ) => {
    const itemIndexToUpdate = items.findIndex((x) => x.id === id);
    const updatedItem: ToDoListItemModel = {
      ...items[itemIndexToUpdate],
      done: newValue,
    };
    const updatedItems = [...items];
    updatedItems[itemIndexToUpdate] = updatedItem;

    return updatedItems;
  };

  const markItemAsDone = (id: string, newValue: boolean) => {
    updateToDoList((list) => doLogicForMarkAsDone(list, id, newValue));
    updateToDoListProjection((list) =>
      doLogicForMarkAsDone(list, id, newValue)
    );
  };

  const searchInToDoList = (label: string) => {
    const toDoListCopy = [...toDoList];

    updateToDoListProjection(
      toDoListCopy.filter((x) => x.label.startsWith(label))
    );
  };

  const showImportantTasks = (isImportant: boolean) => {
    const toDoListCopy = [...toDoList];

    updateToDoListProjection(
      toDoListCopy.filter((x) => x.important === isImportant)
    );
  };

  const showDoneTasks = (isDone: boolean) => {
    const toDoListCopy = [...toDoList];

    updateToDoListProjection(toDoListCopy.filter((x) => x.done === isDone));
  };

  const showAllTasks = () => {
    updateToDoListProjection([...toDoList]);
  };

  console.log(toDoListProjection);

  return (
    <div className="App">
      <Header key="header" />
      <SearchBar
        key="search-bar"
        searchHandler={searchInToDoList}
        showAllTasksHandler={showAllTasks}
        showDoneTasksHandler={showDoneTasks}
        showImportantTasksHandler={showImportantTasks}
      />
      <ToDoList
        key="to-do-list"
        toDoList={toDoListProjection}
        deleteItemHandler={deleteItemFromList}
        importantItemHandler={markItemAsImportant}
        markAsDoneHandler={markItemAsDone}
      />
      <Actions key="actions" addItemToListHandler={addItemToList} />
    </div>
  );
};

export default App;
