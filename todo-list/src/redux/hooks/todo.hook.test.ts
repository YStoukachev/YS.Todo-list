import { RootState } from "../store";
import * as todoHooks from "./todo.hook";
import * as storeHooks from "./store.hook";
import React from "react";
import { selectTodoFilters, selectTodoList } from "../selectors/todo.selector";
import * as ReactRedux from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const mockSelector = jest.spyOn(storeHooks, "useAppSelector");
const mockUseMemo = jest.spyOn(React, "useMemo");
const mockUseCallback = jest.spyOn(React, "useCallback");
const mockUseAppDispatch = jest.spyOn(ReactRedux, "useDispatch");

describe("Todo hooks", () => {
  const rootState: RootState = {
    todoList: {
      list: [
        {
          id: "1",
          label: "Todo Hooks",
          done: false,
          important: false,
        },
      ],
      filters: {},
    },
  };

  beforeEach(() => {
    mockUseMemo.mockImplementation((callback) => callback());
    mockUseCallback.mockImplementation((callback) => callback);
  });

  afterEach(() => {
    mockSelector.mockRestore();
    mockUseMemo.mockRestore();
  });

  test("useFilteredTaskList", () => {
    mockSelector.mockImplementation((selector) => {
      if (selector === selectTodoList) {
        return selectTodoList(rootState);
      } else if (selector === selectTodoFilters) {
        return selectTodoFilters(rootState);
      }
    });

    const { filteredTasks, filters } = todoHooks.useFilteredTaskList();

    expect(filters).toEqual({});
    expect(filteredTasks).toEqual(rootState.todoList.list);
  });

  test("useTaskRemover", () => {
    const mockDispatch = jest.fn();
    mockUseAppDispatch.mockReturnValue(mockDispatch);

    const deleteTask = todoHooks.useTaskRemover();

    deleteTask("1");

    expect(mockUseAppDispatch).toHaveBeenCalledTimes(1);
  });
});
