import {
  StatCard,
  Wrapper
} from "../../components";
import React from "react";

import Grid from "@material-ui/core/Grid";

import StaffTable from '../../components/AddQuestion/StaffTable';
import { Typography } from "@material-ui/core";

const Home = () => {

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
      <br /><br />
      <Typography variant="h4">
        Staff Table
      </Typography>
      <StaffTable rows={rows}/>
    </Wrapper>
  );
};

export default Home;