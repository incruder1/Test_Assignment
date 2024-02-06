import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Header } from '../header';

describe('Header Component', () => {
  const dispatch = jest.fn();

  test('renders Header component with correct elements', () => {
    render(<Header dispatch={dispatch} />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText('todos')).toBeInTheDocument();
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
  });

  test('calls dispatch with ADD_ITEM when a new todo is submitted', () => {
    render(<Header dispatch={dispatch} />);

    const input = screen.getByTestId('text-input');
    const title = 'Test Todo';

    userEvent.type(input, title);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_ITEM', payload: { title } });
  });

  test('does not call dispatch with ADD_ITEM when submitting an empty todo', () => {
    render(<Header dispatch={dispatch} />);

    const input = screen.getByTestId('text-input');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(dispatch).not.toHaveBeenCalled();
  }); 
});
