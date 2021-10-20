import {
  StatCard,
  Wrapper
} from "../../components";
import React from "react";
import { EnhancedTable } from "../../components";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import ComboBox from '../../components/AddQuestion/ComboBox';
import { NavLink } from "react-router-dom";
const divStyle = {
  display: 'flex',
};

const rowContainer = {
   display : 'flex',
   justifyContent : 'space-between',
   
};

const ListOfQuestions = () => {

  return (
    <Wrapper>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="No. of Questions added today"
            value={10}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="No. of questions added yesterday"
            value={10}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total Questions added"
            value={20}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="No. of Questions in active"
            value={30}
            color="#3f51b5"
          />
        </Grid>
      </Grid> 
      <br />
      <div style={rowContainer}>
        <div style={divStyle}>
          <ComboBox data={rows} label="Search Question" />
          <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
            Search
          </Button>
        </div>
        <div style={divStyle}>
          <ComboBox data={rows} label="Type of Questions" />
          <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
            Sort
          </Button>
        </div>
          <p>Total : 350</p>
          <NavLink to="addquestion/standard">
            <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
                Add Questions
            </Button>
          </NavLink>
      </div>
      
      <br /><br />
      <Typography variant="h4">
        List of Questions
      </Typography>
      <EnhancedTable rows={rows} label="ListOfQuestions" columns={columns}/>
    </Wrapper>
  );
};
  
export default ListOfQuestions;

const rows = [
  { id: 1, value: 'Question 1', questionType: 'MCQ'},
  { id: 2, value: 'Question 2', questionType: 'MCQ'},
  { id: 3, value: 'Question 3', questionType: 'MCQ'},
  { id: 4, value: 'Question 4', questionType: 'MCQ'},
  { id: 5, value: 'Question 5', questionType: 'MCQ'},
  { id: 6, value: 'Question 6', questionType: 'MCQ'},
  { id: 7, value: 'Question 7', questionType: 'MCQ'},
  { id: 8, value: 'Question 8', questionType: 'MCQ'},
]

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
    field: 'value',
    headerName: 'Questions',
    width: 400,
    editable: true,
  },
  {
    field: 'questionType',
    headerName: 'Question Type',
    width: 200,
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
];
