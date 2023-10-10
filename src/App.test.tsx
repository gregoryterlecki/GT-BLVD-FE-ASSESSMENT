import React from 'react';
import { render, fireEvent, waitFor, getByTestId, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock the validateEmailRequest function (assuming it's an async function)
jest.mock('./validateEmailRequest', () => ({
  validateEmailRequest: jest.fn().mockResolvedValue(true), // Mock success response
}));

// Define a utility function to wait for promises to resolve
const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('<App /> Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('has the expected initial state', () => {
    const { getByLabelText, getByText } = render(<App />);
    const emailInput = getByLabelText('Enter your email here');
    const submitButton = getByText('Submit');

    expect(emailInput).toHaveValue('');
    expect(submitButton).toBeDisabled();
  });

  it('updates the email state when typing in an email', () => {
    const { getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Enter your email here');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  // test('4. User interaction: clicking submit button triggers validateAndSubmit', () => {
  //   const { getByText } = render(<App />);
  //   const submitButton = getByText('Submit');
  //   const validateAndSubmitMock = jest.fn();
  //   const email = 'test@example.com';

  //   submitButton.onclick = validateAndSubmitMock;
  //   fireEvent.click(submitButton);

  //   expect(validateAndSubmitMock).toHaveBeenCalledWith(email);
  // });

  it('renders a disabled submit button when the input is empty', () => {
    const { getByText, getByLabelText } = render(<App />);
    const submitButton = getByText('Submit');
    const emailInput = getByLabelText('Enter your email here');
    fireEvent.change(emailInput, { target: { value: '' } });
    expect(submitButton).toBeDisabled();
  });

  test('renders a disabled submit button when the request is in flight', async () => {
    const { getByText, getByLabelText } = render(<App />);
    const submitButton = getByText('Submit');
    const emailInput = getByLabelText('Enter your email here');
    const validateAndSubmitMock = jest.fn();

    submitButton.onclick = validateAndSubmitMock;
    act(() => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);
    });

    await flushPromises(); // Wait for async operations to complete

    expect(submitButton).toBeDisabled();
  });

  // test('7. Validation and state update: successful email validation updates state', async () => {
  //   const { getByText, getByLabelText, getByTestId } = render(<App />);
  //   const submitButton = getByText('Submit');
  //   const emailInput = getByLabelText('Enter your email here');
  //   const validationResultMessage = 'Valid';
  //   const validateAndSubmitMock = jest.fn();

  //   submitButton.onclick = validateAndSubmitMock;

  //   act(() => {
  //     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  //     fireEvent.click(submitButton);
  //   });

  //   await flushPromises();
  //   const textField = getByTestId('entry-form-input');
  //   const helperText = textField.querySelector('[data-testid="helper-text"]'); // Access the helperText element by its data-testid

  //   expect(helperText).toHaveTextContent(validationResultMessage);
  // });

  // test('Validation and state update: invalid email validation updates state', async () => {
  //   const { getByText, getByLabelText } = render(<App />);
  //   const submitButton = getByText('Submit');
  //   const emailInput = getByLabelText('Enter your email here');
  //   const validationResultMessage = 'Invalid';
  //   const validateAndSubmitMock = jest.fn().mockResolvedValue(false);

  //   submitButton.onclick = validateAndSubmitMock;
  //   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  //   fireEvent.click(submitButton);

  //   await flushPromises(); // Wait for async operations to complete

  //   const resultMessage = getByText(validationResultMessage);
  //   expect(resultMessage).toBeInTheDocument();
  // });
});
// what test cases do we want to cover?

// App Component
// validate and submit function (you need to mock validation api)
// process result function
// add row function
// buttonDisabled is true when email is empty, OR, request is in flight.

// EntryTable component
// it renders results given some `tableData`
// handles empty data gracefully
// ensure correct table cells are populated

