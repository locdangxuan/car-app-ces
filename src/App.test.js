import React from "react";
import { render, test, expect } from "@testing-library/react";
import App from "./app/App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
