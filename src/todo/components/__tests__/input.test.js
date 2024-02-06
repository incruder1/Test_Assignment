import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../input";
import "@testing-library/jest-dom";
test("renders Input component with correct elements", () => {
  const onSubmit = jest.fn();
  const placeholder = "Enter your todo";
  const label = "Complete the Assigment";

  render(<Input onSubmit={onSubmit} placeholder={placeholder} label={label} />);

  expect(screen.getByTestId("text-input")).toBeInTheDocument();
  expect(screen.getByLabelText(/Complete the Assigment/i)).toBeInTheDocument();
});
test("calls onChange prop when user types in the input field", () => {
  const onSubmit = jest.fn();
  const placeholder = "Enter your todo";
  const label = "Complete the Assigment";
  const mockOnChange = jest.fn();
  render(
    <Input
      onSubmit={onSubmit}
      placeholder={placeholder}
      label={label}
      onChange={mockOnChange}
    />
  );

  const textArea = screen.getByRole("textbox");
});

test("renders Input component with correct elements", () => {
  const onSubmit = jest.fn();
  const placeholder = "Enter your todo";
  const label = "Complete the Assigment>&das";

  render(<Input onSubmit={onSubmit} placeholder={placeholder} label={label} />);

  expect(screen.getByTestId("text-input")).toBeInTheDocument();
  expect(
    screen.getByLabelText(/Complete the Assigment>&das/i)
  ).toBeInTheDocument();
});
