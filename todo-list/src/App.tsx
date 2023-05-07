import * as React from "react";
import "./App.css";
import { Actions } from "./components/actions";
import { Header } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { ToDoList } from "./components/todo-list";
import { ToDoListItemModel } from "./models/todo-list-item";
import { useToDoList } from "./hooks/todo-list-hook";

const App = () => {
  const {
    toDoListProjection,
    addItemToList,
    deleteItemFromList,
    markItemAsDone,
    markItemAsImportant,
    searchInToDoList,
    showAllTasks,
    showDoneTasks,
    showImportantTasks,
  } = useToDoList();

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
