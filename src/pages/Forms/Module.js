import 'react-quill/dist/quill.snow.css';

import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import { Wrapper } from '../../components';
import Button from '@material-ui/core/Button';

import ComboBox from '../../components/AddQuestion/ComboBox';
import SimpleTable from '../../components/AddQuestion/SimpleTable';

const divStyle = {
  display: 'flex',
};

const Module = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Module
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
        Add Module
      </Typography>
      <div style={divStyle}>
        <ComboBox data={modules} label="Module" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Modules
      </Typography>
      <SimpleTable rows={modules} label="Module" path="/addQuestion/standard/board/subject/chapter/module/question" />
    </Wrapper>
  );
};

export default Module;

const modules = [
  { name: 'Partial Integration', num: 4},
  { name: 'Triple Integration', num: 4},
  { name: 'Complex Numbers', num: 4},
  { name: 'Matrices', num: 4},
];
