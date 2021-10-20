import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1) * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});

function SimpleTable({rows, label, path, data}) {
  
  return (
    <div>
      <Paper className={styles.root}>
        <Table className={styles.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>{label}</TableCell>
              {label === "Chapter" ? (<TableCell>Modules</TableCell>) : null}
              {label === "Module" ? (<TableCell>No. of Questions</TableCell>) : null}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <NavLink to={{
                      pathname: path,
                      state: {standard:data['standard'],
                      boardStream: data['boardStream'],
                      subject:data['subject'],
                      value: row.value
                    }
                    }}>
                      <Button variant="outlined" color="primary">{row.name}</Button>
                    </NavLink>
                  </TableCell>
                  {label === "Chapter" ? (
                    <TableCell>{row.num}</TableCell>
                  ) 
                  : null}
                  {label === "Module" ? (
                    <TableCell>{row.num}</TableCell>
                  ) 
                  : null}
                  <TableCell>
                    <Button variant="outlined" color="primary">Edit</Button>
                    <Button variant="outlined" color="secondary">Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <br /><br />
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
