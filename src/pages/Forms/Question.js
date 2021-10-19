import 'react-quill/dist/quill.snow.css';

import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import ReactQuill from 'react-quill';
import { Wrapper } from '../../components';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

const divStyle = {
  display: 'flex',
};

const Question = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Create Question
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
      <div>
        <Card className="overflow-visible">
            <ReactQuill value={text} placeholder={'Write something'} />
        </Card>
        <br />
        <NavLink to="/listofquestions">
          <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
            Add
          </Button>
        </NavLink>
          
      </div>
      <br />
    </Wrapper>
  );
};

export default Question;
