import { ITask, ITaskFilter, ITodoList } from "./todo.reducer";
import todoReducer from "./todo.reducer";
import * as todoActions from "./todo.reducer";
import { AnyAction } from "redux";

describe("Todo list slice", () => {
  const defaultState: ITodoList = {
    list: [],
    filters: {},
  };
  const defaultTask: ITask = {
    id: "1",
    label: "Redux",
    done: false,
    important: false,
  };

  test("Should return default state when passing empty action", () => {
    const result = todoReducer(undefined, { type: "" });

    expect(result).toEqual(defaultState);
  });

  test("Should add new task", () => {
    const action: AnyAction = {
      type: todoActions.addTask.type,
      payload: defaultTask,
    };

    const result = todoReducer(defaultState, action);

    expect(result).toEqual({
      filters: {},
      list: [defaultTask],
    } as ITodoList);
  });

  test("Should delete task", () => {
    const action: AnyAction = {
      type: todoActions.deleteTask.type,
      payload: "1",
    };

    const result = todoReducer(
      {
        filters: {},
        list: [defaultTask],
      },
      action
    );

    expect(result.list).toEqual([]);
  });

  test("Should update task", () => {
    const updatedTask: ITask = {
      ...defaultTask,
      done: true,
    };
    const action: AnyAction = {
      type: todoActions.updateTask.type,
      payload: updatedTask,
    };

    const result = todoReducer(
      {
        filters: {},
        list: [defaultTask],
      },
      action
    );

    expect(result.list[0]).toEqual(updatedTask);
  });

  test("Should update filter", () => {
    const updatedFilter: ITaskFilter = {
      onlyDone: true,
    };
    const action: AnyAction = {
      type: todoActions.updateFilters.type,
      payload: updatedFilter,
    };

    const result = todoReducer(defaultState, action);

    expect(result.filters).toEqual(updatedFilter);
  });

  test("Should delete completed tasks", () => {
    const action: AnyAction = {
      type: todoActions.deleteCompletedTasks.type,
    };

    const result = todoReducer(
      {
        filters: {},
        list: [
          {
            ...defaultTask,
            done: true,
          },
        ],
      },
      action
    );

    expect(result.list).toEqual([]);
  });

  test("Should set todo list", () => {
    const updatedTodoList = [defaultTask];
    const action: AnyAction = {
      type: todoActions.setTodoList.type,
      payload: updatedTodoList,
    };

    const result = todoReducer(defaultState, action);

    expect(result.list).toEqual(updatedTodoList);
  });
});
