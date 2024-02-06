import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "../footer";
import { MemoryRouter } from "react-router-dom";
import { REMOVE_COMPLETED_ITEMS } from "../../constants";
import "@testing-library/jest-dom";

//Test Case Number - 1
test("Display correct Number of Items", () => {
  const todos = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: true },
    { id: 4, title: "Todo 4", completed: false },
  ];
  const dispatch = jest.fn();

  render(
    <MemoryRouter>
      <Footer todos={todos} dispatch={dispatch} />
    </MemoryRouter>
  );

  // Assertions about rendered elements and content
  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByText("2 items left!")).toBeInTheDocument();
  expect(screen.getByText("All")).toBeInTheDocument();
});


//Test Case Number - 2
test("Testing for footer COMPONENT", () => {
  const todos = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: true },
    { id: 4, title: "Todo 4", completed: false },
  ];
  const dispatch = jest.fn();

  render(
    <MemoryRouter>
      <Footer todos={todos} dispatch={dispatch} />
    </MemoryRouter>
  );

  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByTestId("clear-completed")).toBeInTheDocument();
});


//Test Case Number - 3
test("displays correct item count message", () => {
  const todos = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: false },
    { id: 3, title: "Todo 3", completed: true },
    { id: 4, title: "Todo 4", completed: false },
  ];
  const dispatch = jest.fn();
  render(
    <MemoryRouter>
      <Footer todos={todos} dispatch={dispatch} />
    </MemoryRouter>
  );
  expect(screen.getByText("3 items left!")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByText("All")).toBeInTheDocument();
});
