import React, { ChangeEventHandler } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import i18n from '../src/i18n';

type ValidationResult = {
  error: boolean,
  message: string
};

type EntryFormProps = {
  fieldOnChange: ChangeEventHandler<HTMLInputElement>,
  submit: (email: string) => void,
  buttonDisabled: boolean,
  value: string,
  validationResult: ValidationResult
};

const EntryForm: React.FC<EntryFormProps> = ({ validationResult, fieldOnChange, buttonDisabled, value, submit }) => {
  const { message, error } = validationResult;
  const handleSubmit = () => {
    submit(value);
  };

  return (
    <>
      <TextField
        data-testid='entry-form-input'
        label={'Enter your email here'}
        value={value}
        helperText={message}
        error={error}
        onChange={fieldOnChange}
      />
      <Button onClick={handleSubmit} disabled={buttonDisabled}>{i18n.t('submit')}</Button>
    </>
  );
};

export default EntryForm;