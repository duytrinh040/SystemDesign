/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';

export default function EditableRetailerTable() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Retailer Name', width: 200, editable: true },
  
  {
    field: 'dateJoined',
    headerName: 'Date Joined',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastUpdate',
    headerName: 'Last Updated',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
  { field: 'contact', headerName: 'Contact', width: 250, editable: true },
  { field: 'address', headerName: 'Address', width: 700, editable: true },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  
];
