import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { AddTaskForm } from ".";

const mockUseTaskAdder = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
}));

jest.mock("../../redux/hooks/todo.hook", () => ({
  ...jest.requireActual("../../redux/hooks/todo.hook"),
  useTaskAdder: () => mockUseTaskAdder,
}));

describe("AddTaskForm", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Should render add task form", () => {
    const component = render(<AddTaskForm />);

    expect(component).toMatchSnapshot();
  });

  test("Should call adding action when key pressed", () => {
    const { getByRole } = render(<AddTaskForm />);
    const textBox = getByRole("textbox");

    fireEvent.change(textBox, {
      target: {
        value: "Task label",
      },
    });

    fireEvent.keyUp(textBox, {
      code: "Enter",
    });

    fireEvent.keyDown(textBox, {
      code: "Enter",
    });

    expect(mockUseTaskAdder).toHaveBeenCalled();
  });
});
