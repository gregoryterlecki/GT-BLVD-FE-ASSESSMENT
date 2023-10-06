import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EntryForm from './EntryForm';

const mockSubmit = jest.fn();

const defaultProps = {
  fieldOnChange: jest.fn(),
  submit: mockSubmit,
  buttonDisabled: false,
  value: '',
  validationResult: {
    error: false,
    message: '',
  },
};

describe('<EntryForm />', () => {
  it('renders correctly', () => {
    const { getByLabelText, getByText } = render(<EntryForm {...defaultProps} />);
    const emailInput = getByLabelText('Enter your email here');
    const submitButton = getByText('Submit');

    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });


  it('disables the button when buttonDisabled is true', () => {
    const { getByText } = render(<EntryForm {...defaultProps} buttonDisabled={true} />);
    const submitButton = getByText('Submit');
    expect(submitButton).toBeDisabled();
  });

  // put this into its own PR later. Also, include accessibility testing
  // it('handles user input and form submission', async () => {
  //   const { getByLabelText, getByText } = render(<EntryForm {...defaultProps} />);

  //   const emailInput = getByLabelText('Enter your email here') as HTMLInputElement; // Adjust this based on your actual label
  //   const submitButton = getByText('Submit');

  //   Object.defineProperty(emailInput, 'value', { value: 'test@example.com' });

  //   fireEvent.change(emailInput);

  //   expect(emailInput.value).toBe('test@example.com');

  //   fireEvent.click(submitButton);

  //   console.log(mockSubmit.mock.calls);

  //   await waitFor(() => {
  //     expect(mockSubmit).toHaveBeenCalledWith('test@example.com');
  //   });
  // });
});
