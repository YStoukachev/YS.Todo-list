import { fireEvent, render } from "@testing-library/react";
import { ToDoListItem } from ".";
import { ITask } from "../../redux/reducers/todo.reducer";

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

  test("Render todo list item", () => {
    const component = render(<ToDoListItem item={task} />);

    expect(component).toMatchSnapshot();
  });

  test("Task marked as done", () => {
    const { getByRole } = render(<ToDoListItem item={task} />);

    fireEvent.click(getByRole("checkbox"));

    expect(mockTaskUpdater).toHaveBeenCalled();
  });

  test("Task marked as important", () => {
    const { getAllByRole } = render(<ToDoListItem item={task} />);

    fireEvent.click(getAllByRole("button")[0]);

    expect(mockTaskUpdater).toHaveBeenCalled();
  });
});
