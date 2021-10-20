import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { withStyles } from '@material-ui/core/styles';

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

function EnhancedTable({rows, label, columns}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default withStyles(styles)(EnhancedTable);