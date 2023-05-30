import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from ".";
import React from "react";

describe("Button", () => {
  test("Should render button", () => {
    const { getByText } = render(<Button value="Test Button" />);
    const element = getByText("Test Button");
    expect(element).toBeInTheDocument();
  });

  test("Should render button as icon", () => {
    const { container } = render(
      <Button value="Icon button" isIcon={true} iconType="delete" />
    );
    expect(container.firstChild).toHaveClass("delete");
  });

  test("Should render snapshot for button", () => {
    const component = render(<Button value="Test" />);

    expect(component).toMatchSnapshot();
  });

  test("Should render snapshot for button as icon", () => {
    const component = render(<Button value="Test" iconType="delete" />);

    expect(component).toMatchSnapshot();
  });
});
