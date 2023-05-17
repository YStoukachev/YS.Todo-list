import { TODO_LIST_KEY } from "../middlewares/local-storage.middleware";
import { ITask } from "../redux/reducers/todo.reducer";

export const useTodoLoader = () => {
  const getTodoList = (): ITask[] => {
    const stringState = localStorage.getItem(TODO_LIST_KEY);

    if (stringState !== null) {
      const tasks = JSON.parse(stringState) as ITask[];

      return Boolean(tasks) ? tasks : [];
    }

    return [];
  };

  return { getTodoList };
};
