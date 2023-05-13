import "./App.css";
import { Header } from "./components/header";
import SearchBarWithRedux from "./components/search-bar/index-with-redux";
import ToDoListWithRedux from "./components/todo-list/index-with-redux";
import AddTaskFormWithRedux from "./components/add-task-form/index-with-redux";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const AppWithRedux = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header appStyleType="redux" />
        <SearchBarWithRedux />
        <ToDoListWithRedux />
        <AddTaskFormWithRedux />
      </Provider>
    </div>
  );
};

export default AppWithRedux;
