import 'react-quill/dist/quill.snow.css';
import './Form.css';

import React, { useState } from 'react';
import './Form.css'
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

const Board = (props) => {

  const [text] = useState('');
  const value = props.location.state.value
  console.log(value)
  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Board
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
      {value > 10 ?
        <SimpleTable rows={streams} label="Board" path="/addQuestion/standard/board/subject" />
      : <SimpleTable rows={boards} label="Board" path="/addQuestion/standard/board/subject" />
      }
    </Wrapper>
  );
};

export default Board;

const boards = [
  { name: 'CBSE'},
  { name: 'ICSE'},
  { name: 'SSC'},
];
const streams = [
  { name: 'Science'},
  { name: 'Commerce'},
  { name: 'Biology'},
];
