import { render, screen } from "@testing-library/react";

import App from "./App";
import { isValidPassword } from "../functions";

describe("Renders main page correctly", () => {
  it("Should display 'Get Started' text", () => {
    render(<App />);
    const h1 = screen.queryByText("Get Started");

    expect(h1).toBeInTheDocument();
  });
});

describe("Password validation", () => {
  it("Password matches confirmation password so returns true", () => {
    const password = "password123";
    const confirmPassword = "password123";

    expect(isValidPassword(password, confirmPassword)).toBe(true);
  });

  it("Password doesn't match confirmation function so returns false", () => {
    const password = "password123";
    const confirmPassword = "password124";

    expect(isValidPassword(password, confirmPassword)).toBe(false);
  });
});
