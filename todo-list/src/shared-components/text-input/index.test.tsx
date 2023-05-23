import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextInput } from ".";

describe("TextInput", () => {
  test("Render text input", () => {
    const { getByRole } = render(<TextInput />);
    const element = getByRole("textbox");
    expect(element).toBeInTheDocument();
  });
});
