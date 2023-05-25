import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { AddTaskForm } from ".";

const mockUseTaskAdder = jest.fn();
// const mockUseState = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
}));

const mockUseState = jest.spyOn(React, "useState");

jest.mock("../../redux/hooks/todo.hook", () => ({
  ...jest.requireActual("../../redux/hooks/todo.hook"),
  useTaskAdder: () => mockUseTaskAdder,
}));

describe("AddTaskForm", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Render add task form", () => {
    const component = render(<AddTaskForm />);

    expect(component).toMatchSnapshot();
  });

  // test("Input string to text box", () => {
  //   const mockSet = jest.fn();

  //   mockUseState.mockImplementation(() => ["", mockSet]);

  //   const { getByRole } = render(<AddTaskForm />);

  //   fireEvent.change(getByRole("textbox"), {
  //     target: {
  //       value: "Task label",
  //     },
  //   });

  //   expect(mockSet).toHaveBeenCalled();
  // });
});
