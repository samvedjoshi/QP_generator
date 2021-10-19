import 'react-quill/dist/quill.snow.css';
import './Form.css';

import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import ReactQuill from 'react-quill';
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
      <Card className="overflow-visible">
        <ReactQuill value={text} placeholder={'Write something'} />
      </Card>
      <br />
      <div style={divStyle}>
        <Typography variant="h4">
          Select Standard
        </Typography>
        <div>
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
      <SimpleTable rows={subjects} label="Subject" path="/chapter" />
    </Wrapper>
  );
};

export default Subject;

const subjects = [
  { value: 'English', num: 4},
  { value: 'Maths', num: 4},
  { value: 'Science', num: 4},
  { value: 'Hindi', num: 4},
  { value: 'Accounting', num: 4},
]
