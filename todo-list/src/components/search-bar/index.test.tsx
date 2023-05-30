import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { SearchBar } from ".";

const mockFilterUpdater = jest.fn();
const mockCompletedTaskRemover = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
}));

jest.mock("../../redux/hooks/todo.hook", () => ({
  ...jest.requireActual,
  useFilterUpdater: () => mockFilterUpdater,
  useCompletedTaskRemover: () => mockCompletedTaskRemover,
}));

describe("SearchBar", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Should render search bar", () => {
    const component = render(<SearchBar />);

    expect(component).toMatchSnapshot();
  });

  test("Should call update filters when call All button", () => {
    const { getByRole } = render(<SearchBar />);
    const button = getByRole("button", {
      name: "All",
    });

    fireEvent.click(button);

    expect(mockFilterUpdater).toHaveBeenCalled();
  });

  test("Should call update filters when call Active button", () => {
    const { getByRole } = render(<SearchBar />);
    const button = getByRole("button", {
      name: "Active",
    });

    fireEvent.click(button);

    expect(mockFilterUpdater).toHaveBeenCalled();
  });

  test("Should call update filters when call Important button", () => {
    const { getByRole } = render(<SearchBar />);
    const button = getByRole("button", {
      name: "Important",
    });

    fireEvent.click(button);

    expect(mockFilterUpdater).toHaveBeenCalled();
  });

  test("Should call delete action when call Clear Completed tasks", () => {
    const { getByRole } = render(<SearchBar />);
    const button = getByRole("button", {
      name: "Clear Completed",
    });

    fireEvent.click(button);

    expect(mockCompletedTaskRemover).toHaveBeenCalled();
  });
});
