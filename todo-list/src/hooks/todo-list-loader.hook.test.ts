import { ITask } from "../redux/reducers/todo.reducer";
import { useTodoLoader } from "./todo-list-loader.hook";
import { TODO_LIST_KEY } from "../middlewares/local-storage.middleware";

describe("Todo list loader hooks", () => {
  const mockLocalStorage = () => {
    const store: { [key: string]: any } = {};

    const getItem = (key: string) => {
      return store[key];
    };

    const setItem = (key: string, value: any) => {
      store[key] = value;
    };

    return {
      getItem,
      setItem,
    };
  };

  Object.defineProperty(window, "localStorage", { value: mockLocalStorage() });

  const defaultTask: ITask = {
    id: "1",
    label: "LocalStorage",
    done: false,
    important: false,
  };

  const setLocalStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  test("Should return todo list from local storage", () => {
    setLocalStorage(TODO_LIST_KEY, [defaultTask]);

    const { getTodoList } = useTodoLoader();

    expect(getTodoList()).toEqual([defaultTask]);
  });
});
