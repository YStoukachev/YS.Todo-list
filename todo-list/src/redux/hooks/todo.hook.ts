import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./store.hook";
import * as todoActions from "../reducers/todo.reducer";
import { ITask, ITaskFilter } from "../reducers/todo.reducer";
import { selectTodoFilters, selectTodoList } from "../selectors/todo.selector";

export const useTaskRemover = () => {
  const dispatcher = useAppDispatch();
  return useCallback(
    (id: string) => {
      dispatcher(todoActions.deleteTask(id));
    },
    [dispatcher]
  );
};

export const useTaskAdder = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (task: Omit<ITask, "id">) => {
      dispatcher(todoActions.addTask({ ...task, id: crypto.randomUUID() }));
    },
    [dispatcher]
  );
};

export const useTaskUpdater = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (task: ITask) => {
      dispatcher(todoActions.updateTask(task));
    },
    [dispatcher]
  );
};

export const useFilterUpdater = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (filters: ITaskFilter) => {
      dispatcher(todoActions.updateFilters(filters));
    },
    [dispatcher]
  );
};

export const useFilteredTaskList = () => {
  const toDoList = useAppSelector(selectTodoList);
  const filters = useAppSelector(selectTodoFilters);

  return useMemo(() => {
    const filteredTasks = toDoList.filter((item) => {
      let isValid = true;

      if (isValid && item.label) {
        isValid = item.label.toLocaleLowerCase().includes(filters.label || "");
      }

      if (isValid) {
        isValid = filters.onlyDone ? item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyActive ? !item.done : true;
      }

      if (isValid) {
        isValid = filters.onlyImportant ? item.important : true;
      }

      return isValid;
    });

    return {
      filteredTasks,
      filters,
    };
  }, [filters, toDoList]);
};

export const useCompletedTaskRemover = () => {
  const dispatcher = useAppDispatch();

  return useCallback(() => {
    dispatcher(todoActions.deleteCompletedTasks());
  }, [dispatcher]);
};

export const useTodoListSetter = () => {
  const dispatcher = useAppDispatch();

  return useCallback(
    (list: ITask[]) => {
      dispatcher(todoActions.setTodoList(list));
    },
    [dispatcher]
  );
};
