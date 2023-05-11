import "./App.css";
import { AddTaskForm } from "./components/add-task-form";
import { Header } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { ToDoList } from "./components/todo-list";
import { useToDoList } from "./hooks/todo-list-hook";

const App = () => {
  const {
    filteredList,
    setToDoFilters,
    resetFilters,
    deleteItem,
    updateItem,
    filters,
    addItem,
  } = useToDoList();

  return (
    <div className="App">
      <Header key="header" />
      <SearchBar
        onFilterChanges={setToDoFilters}
        filters={filters}
        onResetFilters={resetFilters}
      />
      <ToDoList
        toDoList={filteredList}
        onDelete={deleteItem}
        onUpdate={updateItem}
      />
      <AddTaskForm onSubmit={addItem} />
    </div>
  );
};

export default App;
