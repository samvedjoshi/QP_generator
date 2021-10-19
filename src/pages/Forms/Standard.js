import 'react-quill/dist/quill.snow.css';

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

const Standard = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <Card className="overflow-visible">
        <ReactQuill value={text} placeholder={'Write something'} />
      </Card>
      <br />
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Standard
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
        Add Standard
      </Typography>
      <div style={divStyle}>
        <ComboBox data={standards} label="Standard" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Standards
      </Typography>
      <SimpleTable rows={standards} label='Standard' path="/addQuestion/standard/board" />
    </Wrapper>
  );
};

export default Standard;

const standards = [
  { value: 8, name: '8th'},
  { value: 9, name: '9th'},
  { value: 10, name: '10th'},
  { value: 11, name: '11th'},
  { value: 12, name: '12th'},
]
