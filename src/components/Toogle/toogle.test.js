import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import Toogle from "./index";

afterEach(() => cleanup());
test("Toogle btn click", () => {
  const { asFragment, getByTestId } = render(<Toogle title="update" />);
  const firstRender = asFragment();

  fireEvent.click(getByTestId("btn-toogle"));
  expect(firstRender).toHaveTextContent("update");

  fireEvent.click(getByTestId("btn-toogle"));

  expect(firstRender).toHaveTextContent("update");
});
