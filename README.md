# Todo App Test Suite

This test suite covers the unit testing of components in a Todo application.

## Components Tested

1. **Input Component**: Responsible for rendering an input field to add new todos.

2. **Item Component**: Represents an individual todo item.

3. **Footer Component**: Displays the footer section of the to-do list, including filters and a "Clear Completed" button.

## Prerequisites

Ensure that you have the required dependencies installed:

- Node.js and npm

## Installation

```bash
npm install
```
## Running Tests

```bash
npm run test
```
This command will run the Jest test suite, executing tests for the Input, Item, and Footer components.

## Test Descriptions
### Input Component Tests
-  Renders Input component with correct elements.
- Calls onChange prop when the user types in the input field.
-  renders Input component with correct elements.
  
## Item Component Tests
- renders Item component with correct elements .
- renders Item components with correct elements for the second todo.
- toggles the second item when its checkbox is clicked.
- calls removeItem when the remove button is clicked.

## Footer Component Tests
- Display the correct Number of Items.
- Testing for footer component.
- Displays correct item count message.
### Header Component Tests
- Renders Header component with correct elements.
- Calls dispatch with ADD_ITEM when a new todo is submitted.
- Does not call dispatch with ADD_ITEM when submitting an empty todo.

- ----------xxxxxxxxxxxxxx-----------END--------------------xxxxxxxxxxxxxxxxxx------------------
