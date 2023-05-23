import "./App.css";
import React from "react";
import { AddTaskForm } from "./components/add-task-form";
import { ToDoList } from "./components/todo-list";
import { Header } from "./components/header";

const App = () => {
  return (
    <div className="App">
      <div className="background-container">
        <div className="app-container">
          <Header />
          <AddTaskForm />
          <ToDoList />
        </div>
      </div>
    </div>
  );
};

export default App;
