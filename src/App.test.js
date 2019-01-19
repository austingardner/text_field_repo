import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "react-testing-library";

jest.mock("@material-ui/core/TextField", () =>
  "input"
);

it("renders without crashing", () => {
  const { getByTestId } = render(<App />);
  const GOOD_ICE_CREAM = "chocolate chip cookie dough";

  const textField = getByTestId("test-field");
  fireEvent.change(textField, { target: { value: GOOD_ICE_CREAM } });
  expect(textField.value).toEqual(GOOD_ICE_CREAM);

  cleanup();
});
