import { fireEvent, render } from "@testing-library/react";
import { ToDoListItem } from ".";
import { ITask } from "../../redux/reducers/todo.reducer";
import React from "react";

const mockTaskRemover = jest.fn();
const mockTaskUpdater = jest.fn();

jest.mock("../../redux/hooks/todo.hook", () => ({
  ...jest.requireActual("../../redux/hooks/todo.hook"),
  useTaskRemover: () => mockTaskRemover,
  useTaskUpdater: () => mockTaskUpdater,
}));

describe("ToDoListItem", () => {
  const task: ITask = {
    id: "1",
    done: false,
    label: "TodoListItem",
    important: false,
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Should render todo list item", () => {
    const component = render(<ToDoListItem item={task} />);

    expect(component).toMatchSnapshot();
  });

  test("Should call update action when task marked as done", () => {
    const { getByRole } = render(<ToDoListItem item={task} />);

    fireEvent.click(getByRole("checkbox"));

    expect(mockTaskUpdater).toHaveBeenCalled();
  });

  test("Should call update action when task marked as important", () => {
    const { container } = render(<ToDoListItem item={task} />);
    const warningIcon = container.getElementsByClassName("warning")[0];

    fireEvent.click(warningIcon);

    expect(mockTaskUpdater).toHaveBeenCalled();
  });

  test("Should call delete action when click to delete icon", () => {
    const { container } = render(<ToDoListItem item={task} />);
    const deleteIcon = container.getElementsByClassName("trash")[0];

    fireEvent.click(deleteIcon);

    expect(mockTaskRemover).toHaveBeenCalled();
  });
});
