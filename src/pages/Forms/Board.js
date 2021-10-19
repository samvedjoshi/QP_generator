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

const Board = () => {

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
              <a href="/addQuestion/standard/board"> Board </a></h4>
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6">
        Add Board
      </Typography>
      <div style={divStyle}>
        <ComboBox data={boards} label="Board" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Boards
      </Typography>
      <SimpleTable rows={boards} label="Board" path="/addQuestion/standard/board/subject" />
    </Wrapper>
  );
};

export default Board;

const boards = [
  { value: 'CBSE'},
  { value: 'ICSE'},
  { value: 'SSC'},
];
const streams = [
  { value: 'Science'},
  { value: 'Commerce'},
  { value: 'Biology'},
];
