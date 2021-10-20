import {
  StatCard,
  Wrapper
} from "../../components";
import React from "react";

import Grid from "@material-ui/core/Grid";
// import { EnhancedTable } from "../../components/";
import StaffTable from '../../components/AddQuestion/StaffTable'
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Dashboard = () => {

  console.log(rows)
  return (
    <Wrapper>
      <Typography variant="h4">
          Dashboard
        </Typography>
        <br/>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Number of active staff"
            value={10}
            color="#2AAA8A"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Number of inactive staff"
            value={10}
            color="#f44336"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total staff"
            value={20}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total Questions"
            value={30}
            color="#9c27b0"
          />
        </Grid>
      </Grid>
      <br />
      <NavLink to="/listofquestions">
        <Button variant="contained" color="primary">
          View all Questions
        </Button>
      </NavLink>
      <br /><br />
      <Typography variant="h4">
        Staff Table
      </Typography>
      {/* <EnhancedTable row={rows} label="StaffList" columns={columns}/> */}
      <StaffTable rows={rows}/>
    </Wrapper>
  );
};

export default Dashboard;

const rows = [
  { id: 1, name: 'Question 1', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
  { id: 2, name: 'Question 2', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
  { id: 3, name: 'Question 3', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
  { id: 4, name: 'Question 4', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
  { id: 5, name: 'Question 5', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
  { id: 6, name: 'Question 6', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
  { id: 7, name: 'Question 7', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
  { id: 8, name: 'Question 8', date: 'MCQ', time: 'MCQ', activity: 'MCQ'},
]

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'name',
//     headerName: 'Name',
//     width: 400,
//     editable: true,
//   },
//   {
//     field: 'date',
//     headerName: 'Date',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'time',
//     headerName: 'Time',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'activity',
//     headerName: 'Activity',
//     width: 200,
//     editable: true,
//   },
// ];
