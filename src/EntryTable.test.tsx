import React from 'react';
import { render } from '@testing-library/react';
import EntryTable from './EntryTable';
import '@testing-library/jest-dom';

describe('<EntryTable />', () => {
  const date = new Date().toString();

  it('renders empty data correctly', () => {
    const { getByTestId } = render(<EntryTable tableData={[]} />);
    const tableBody = getByTestId('entry-table-body');
    expect(tableBody).toBeInTheDocument();
    expect(tableBody.hasChildNodes()).toBe(false);
  });

  it('renders content when given table data', () => {
    const tableData = [{ date, message: 'valid', email: 'asdf@asdf.com' }];
    const { getByTestId } = render(<EntryTable tableData={tableData} />);
    const tableBody = getByTestId('entry-table-body');
    expect(tableBody).toBeInTheDocument();
    expect(tableBody.hasChildNodes()).toBe(true);
  });

  it('renders the correct columns', () => {
    const message = 'valid';
    const email = 'asdf@asdf.com';
    const tableData = [{ date, message, email }];
    const { getByTestId } = render(<EntryTable tableData={tableData} />);
    const tableBodyRow = getByTestId('entry-table-row');
    expect(tableBodyRow.childNodes.length === 3).toBe(true);
    expect(tableBodyRow.childNodes[0]).toHaveTextContent(date);
    expect(tableBodyRow.childNodes[1]).toHaveTextContent(email);
    expect(tableBodyRow.childNodes[2]).toHaveTextContent(message);
  });
});
