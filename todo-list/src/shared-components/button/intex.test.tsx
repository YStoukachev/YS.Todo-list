import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from ".";
import React from 'react';

describe("Button", () => {
  test("Render button", () => {
    const { getByText } = render(<Button value="Test Button" />);
    const element = getByText("Test Button");
    expect(element).toBeInTheDocument();
  });

  test("Render button as icon", () => {
    const { container } = render(
      <Button value="Icon button" isIcon={true} iconType="delete" />
    );
    expect(container.firstChild).toHaveClass("delete");
  });

  test("Render snapshot for button", () => {
    const component = render(<Button value="Test" />);

    expect(component).toMatchSnapshot();
  });

  test("Render snapshot for button as icon", () => {
    const component = render(<Button value="Test" iconType="delete" />);

    expect(component).toMatchSnapshot();
  });
});
