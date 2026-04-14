import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders updated hero heading", () => {
  render(<App />);
  expect(screen.getByText(/digital experiences/i)).toBeInTheDocument();
});
