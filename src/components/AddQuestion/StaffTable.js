import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function StaffTable({rows}) {

  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Date</TableCell>
            <TableCell numeric>Time</TableCell>
            <TableCell numeric>Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.date}</TableCell>
                <TableCell numeric>{row.time}</TableCell>
                <TableCell numeric>{row.activity}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

StaffTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaffTable);
