import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CheckBox } from ".";

describe("CheckBox", () => {
  test("Render check box", () => {
    const { getByRole } = render(
      <CheckBox checked={false} onChange={() => true} />
    );
    const element = getByRole("checkbox");
    expect(element).toBeInTheDocument();
  });
});
