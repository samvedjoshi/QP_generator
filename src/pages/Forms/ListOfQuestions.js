import {
    StatCard,
    Wrapper
  } from "../../components";
  import React from "react";
  
  import Grid from "@material-ui/core/Grid";
  import Button from '@material-ui/core/Button';
  import StaffTable from '../../components/AddQuestion/StaffTable';
  import { Typography } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import ComboBox from '../../components/AddQuestion/ComboBox';




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
      createData('Frozen yoghurt', 159, 6.0, 24),
      createData('Ice cream sandwich', 237, 9.0, 37),
      createData('Eclair', 262, 16.0, 24),
      createData('Cupcake', 305, 3.7, 67),
      createData('Gingerbread', 356, 16.0, 49),
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
        <ComboBox label="Module" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <div style={divStyle}>
        <ComboBox label="Module" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <p>Total : 350</p>
      <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add Questions
        </Button>
      </div>
        
        <br /><br />
        <Typography variant="h4">
          Staff Table
        </Typography>
        <StaffTable rows={rows}/>
      </Wrapper>
    );
  };
  
  export default ListOfQuestions;
  