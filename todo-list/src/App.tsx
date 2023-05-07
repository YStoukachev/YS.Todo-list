import "./App.css";
import { Actions } from "./components/actions";
import { Header } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { TodoList } from "./components/todo-list";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <TodoList />
      <Actions />
    </div>
  );
};

export default App;
