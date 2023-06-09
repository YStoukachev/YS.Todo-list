import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CheckBox } from ".";
import React from "react";

describe("CheckBox", () => {
  test("Should render check box", () => {
    const { getByRole } = render(
      <CheckBox checked={false} onChange={() => true} />
    );
    const element = getByRole("checkbox");
    expect(element).toBeInTheDocument();
  });

  test("Should render check box snapshot", () => {
    const component = render(
      <CheckBox checked={false} onChange={() => true} />
    );

    expect(component).toMatchSnapshot();
  });
});
