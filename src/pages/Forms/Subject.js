import 'react-quill/dist/quill.snow.css';
import './Form.css';
import React, { useState } from 'react';


import { Typography } from '@material-ui/core';

import { Wrapper } from '../../components';
import Button from '@material-ui/core/Button';

import ComboBox from '../../components/AddQuestion/ComboBox';
import SimpleTable from '../../components/AddQuestion/SimpleTable';

const divStyle = {
  display: 'flex',
};
const links = {
  alignItems: 'right',
  marginRight: '15px'
}

const Subject = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Subject
        </Typography>
        <div >
          <Typography>
            <h4>AddQuestion - <a href="/addQuestion/standard"> Standard </a>-
              <a href="/addQuestion/standard/board"> Board </a>-
              <a href="/addQuestion/standard/board/subject"> Subject </a></h4>
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6">
        Add Subject
      </Typography>
      <div style={divStyle}>
        <ComboBox data={subjects} label="Subject" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Subjects
      </Typography>
      <SimpleTable rows={subjects} label="Subject" path="/addQuestion/standard/board/subject/chapter" />
    </Wrapper>
  );
};

export default Subject;

const subjects = [
  { name: 'English', num: 4},
  { name: 'Maths', num: 4},
  { name: 'Science', num: 4},
  { name: 'Hindi', num: 4},
  { name: 'Accounting', num: 4},
]
