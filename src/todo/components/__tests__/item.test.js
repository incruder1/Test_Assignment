import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Item } from "../item";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

describe('Item Component', () => {
  const todos = [
    { id: 1, title: 'Test Todo 1', completed: false },
    { id: 2, title: 'Test Todo 2', completed: true },
  ];
  const dispatch = jest.fn();
//TestCase Number- 1
  test('renders Item component with correct elements for the first todo', () => {
    render(<Item todo={todos[0]} dispatch={dispatch} index={0} />);

    expect(screen.getByTestId('todo-item')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-label')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-button')).toBeInTheDocument();
  });
//TestCase Number- 2
  test('renders Item component with correct elements for the second todo', () => {
    render(<Item todo={todos[1]} dispatch={dispatch} index={1} />);

    expect(screen.getByTestId('todo-item')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-label')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-button')).toBeInTheDocument();
  });
//TestCase Number- 3
  test('toggles the second item when its checkbox is clicked', () => {
    render(<Item todo={todos[1]} dispatch={dispatch} index={1} />);

    const toggleCheckbox = screen.getByTestId('todo-item-toggle');
    fireEvent.click(toggleCheckbox);

    expect(dispatch).toHaveBeenCalledWith({ type: 'TOGGLE_ITEM', payload: { id: 2 } });
  });
//TestCase Number-4
  test('calls removeItem when the remove button is clicked', () => {
    render(<Item todo={todos[1]} dispatch={dispatch} index={1} />);

    const removeButton = screen.getByTestId('todo-item-button');
    fireEvent.click(removeButton);

    expect(dispatch).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', payload: { id: 2 } });
  });


});