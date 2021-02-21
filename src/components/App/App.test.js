import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "components/App/App.component";

test("renders home text", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
