import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useTranslation } from 'react-i18next';

import { RowType } from './types';

type EntryTableProps = {
  tableData: RowType[];
}

const EntryTable = ({ tableData }: EntryTableProps) => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow data-testid='entry-table-header'>
            <TableCell>{t('tableHeaders.date')}</TableCell>
            <TableCell align="right">{t('tableHeaders.entry')}</TableCell>
            <TableCell align="right">{t('tableHeaders.result')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid='entry-table-body'>
          {tableData?.map(({ date, email, message }, index) =>
            <TableRow key={index} data-testid='entry-table-row'>
              <TableCell>{date}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{message}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default EntryTable;