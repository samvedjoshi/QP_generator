import {
    StatCard,
    Wrapper
  } from "../../components";
  import React from "react";
  import { EnhancedQuestionTable } from "../../components";
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
  
    let id = 0;
    function createData(name, calories, fat, carbs) {
      id += 1;
      return { id, name, calories, fat, carbs};
    }
  
    const rows = [
      createData('Question 1','MCQ'),
      createData('Question 2','MCQ'),
      createData('Question 3','MCQ'),
      createData('Question 4','MCQ'),
      createData('Question 5','MCQ'),
      createData('Question 6','MCQ'),
      createData('Question 7','MCQ'),
      createData('Question 8','MCQ'),
      
    ];
  
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
              title="No. of id:2,questions added yesterday"
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
        <EnhancedQuestionTable row={row} label="ListOfQuestions"/>
      </Wrapper>
    );
  };
  
  export default ListOfQuestions;
  const row = [
    { id:1,questions:'Question 1',questionType: 'MCQ'},
    { id:2,questions:'Question 2',questionType: 'MCQ'},
    { id:3,questions:'Question 3',questionType: 'MCQ'},
    { id:4,questions:'Question 4',questionType: 'MCQ'},
    { id:5,questions:'Question 5',questionType: 'MCQ'},
    { id:6,questions:'Question 6',questionType: 'MCQ'},
    { id:7,questions:'Question 7',questionType: 'MCQ'},
    { id:8,questions:'Question 8',questionType: 'MCQ'},
  ]
  