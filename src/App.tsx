import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

import { validateEmailRequest } from './validateEmailRequest';

import EntryForm from './EntryForm';
import EntryTable from './EntryTable';

import { RowType, AddRowPayloadType, ProcessResultType } from './types';

export default function App() {
  const [email, setEmail] = useState('');
  const [requestInFlight, setRequestInFlight] = useState(false);
  const [tableData, setTableData] = useState<RowType[]>([]);
  const [validationResult, setValidationResult] = useState({
    error: false,
    message: '',
  });

  const addRow = ({ email, message }: AddRowPayloadType) => {
    const date = new Date().toString();
    setTableData([...tableData, { date, email, message }]);
  };

  const processResult = ({ email, error, message }: ProcessResultType) => {
    setValidationResult({ error, message });
    addRow({ email, message });
  };

  const validateAndSubmit = async (email: string) => {
    setRequestInFlight(true);

    try {
      const emailValid = await validateEmailRequest(email);
      const message = emailValid ? 'Valid' : 'Invalid';
      processResult({ error: !emailValid, email, message })
    } catch (error) {
      console.log('error', error);
      const message = 'An error occurred while validating the email';
      processResult({ error: true, email, message })
    } finally {
      setRequestInFlight(false);
    }
  };

  const resetValidation = () => {
    setValidationResult({ error: false, message: '' });
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
    resetValidation();
  };

  const buttonDisabled = email === '' || requestInFlight;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={4}>
          <EntryForm value={email} fieldOnChange={handleChange} submit={validateAndSubmit} buttonDisabled={buttonDisabled} validationResult={validationResult} />
        </Grid>
        <Grid item xs={8}>
          <EntryTable tableData={tableData} />
        </Grid>
      </Grid>
    </Container>
  );
}


/**
 *  NOTES
 * 
 * 
 * the call to validate email has some stuff we don't need to see here; like the res.json() stuff.
 *  should we move all the state stuff and logic to a hook? When should we use a hook?
 * 
 * consider using react suspense?
 * 
 * also consider 
 * 
 */
