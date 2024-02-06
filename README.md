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
-  RendersTest Input component with correct elements.
- Test to Calls onChange prop when the user types in the input field.
-  Test to render Input component with correct elements.
  
## Item Component Tests
- Test to render the Item component with correct elements.
- Test to render Item components with correct elements for the second todo.
- Test to  toggle the second item when its checkbox is clicked.
- Test to  call removeItem when the remove button is clicked.

## Footer Component Tests
- Test to Display the correct Number of Items.
- Test test for the footer component.
- Test to Display correct item count message.
### Header Component Tests
- Test to Renders Header component with correct elements.
- Test to Calls dispatch with ADD_ITEM when a new todo is submitted.
- Test to not call dispatch with ADD_ITEM when submitting an empty todo.

