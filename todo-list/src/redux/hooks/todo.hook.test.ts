import { RootState } from "../store";
import * as todoHooks from "./todo.hook";
import * as storeHooks from "./store.hook";
import React from "react";
import { selectTodoFilters, selectTodoList } from "../selectors/todo.selector";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const mockSelector = jest.spyOn(storeHooks, "useAppSelector");
const mockUseMemo = jest.spyOn(React, "useMemo");
const mockUseCallback = jest.spyOn(React, "useCallback");

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

  test("Should return filters and tasks", () => {
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
});
