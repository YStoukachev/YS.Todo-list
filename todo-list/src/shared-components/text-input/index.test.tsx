import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextInput } from ".";
import React from "react";

describe("TextInput", () => {
  test("Should render text input", () => {
    const { getByRole } = render(<TextInput />);
    const element = getByRole("textbox");
    expect(element).toBeInTheDocument();
  });

  test("Should render text input", () => {
    const component = render(<TextInput />);
    expect(component).toMatchSnapshot();
  });
});
