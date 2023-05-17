import "./App.css";
import { AddTaskForm } from "./components/add-task-form";
import { Header } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { ToDoList } from "./components/todo-list";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ToDoList />
      <AddTaskForm />
    </div>
  );
};

export default App;
