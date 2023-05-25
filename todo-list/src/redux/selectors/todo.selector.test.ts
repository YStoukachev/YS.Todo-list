import { ITask, ITaskFilter } from "../reducers/todo.reducer";
import { RootState } from "../store";
import { selectTodoFilters, selectTodoList } from "./todo.selector";

describe("Todo selectors", () => {
  const defaultState: RootState = {
    todoList: {
      list: [
        {
          id: "1",
          label: "Selectors",
          done: false,
          important: false,
        },
      ],
      filters: {
        onlyDone: true,
      },
    },
  };

  test("Should return todo list", () => {
    const result = selectTodoList(defaultState);

    expect(result).toEqual([
      {
        id: "1",
        label: "Selectors",
        done: false,
        important: false,
      },
    ] as ITask[]);
  });

  test("Should return todo filters", () => {
    const result = selectTodoFilters(defaultState);

    expect(result).toEqual({
      onlyDone: true,
    } as ITaskFilter);
  });
});
