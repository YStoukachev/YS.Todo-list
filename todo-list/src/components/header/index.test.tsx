import { render } from "@testing-library/react";
import { Header } from ".";
import React from "react";

describe("Header", () => {
  test("Render header", () => {
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
