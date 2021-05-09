/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';
var randomEmail = require('random-email');

export default function EditableEmployeeTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  {
    field: 'dob',
    headerName: 'Date of Birth',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'dateJoined',
    headerName: 'Date Joined',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 220,
    editable: true,
  },
  { field: 'phone', headerName: 'Phone Number', width: 180, editable: true },
  { field: 'role', headerName: 'Role', width: 180, editable: true },
  { field: 'section', headerName: 'Section', width: 180, editable: true },
  { field: 'address', headerName: 'Address', width: 300, editable: true },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    dob: randomCreatedDate(),
    dateJoined: randomCreatedDate(),
    email: randomEmail({domain:'gmail.com'}),
  },
  
];
