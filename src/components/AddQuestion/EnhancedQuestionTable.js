import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(1) * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  const renderButton = (params) => {
    return (
        <strong>
            <Button
                variant="outlined"
                color="primary"
            >
                Edit
            </Button>
            <Button
                variant="outlined"
                color="secondary"
            >
                Delete
            </Button>
        </strong>
    )
}
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'questions',
    headerName: 'Questions',
    width: 150,
    editable: true,
  },
  {
    field: 'questionType',
    headerName: 'Question Type',
    width: 180,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    type: 'number',
    width: 150,
    renderCell:renderButton,
    editable: true,
    sortable:false,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 37 },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

function EnhancedQuestionTable({row, label}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default withStyles(styles)(EnhancedQuestionTable);