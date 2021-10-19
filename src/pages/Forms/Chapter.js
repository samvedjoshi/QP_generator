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
const Chapter = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <Card className="overflow-visible">
        <ReactQuill value={text} placeholder={'Write something'} />
      </Card>
      <br />
      <div className='flex-container' style={divStyle}>
        <Typography variant="h4">
          Select Standard
        </Typography>
        <div>
          <Typography>
              <h4>AddQuestion - <a href="/addQuestion/standard"> Standard </a>-
              <a href="/addQuestion/standard/board"> Board </a>-
              <a href="/addQuestion/standard/board/subject"> Subject </a>
              <a href="/addQuestion/standard/board/subject/chapter"> Chapter </a></h4>
          </Typography>
        </div>
      </div>
      <div style={divStyle}>
        <ComboBox className="comboBox" data={chapters} label="Chapter" />
        <Button className="addButton" variant="contained" color="primary">
          Add
        </Button>
      </div>
      <SimpleTable rows={chapters} label="Chapter" path="/addQuestion/standard/board/subject/chapter" />
    </Wrapper>
  );
};

export default Chapter;

const chapters = [
  { value: 'Chapter 1'},
  { value: 'Chapter 2'},
  { value: 'Chapter 3'},
  { value: 'Chapter 4'},
  { value: 'Chapter 5'},
  { value: 'Chapter 6'},
  { value: 'Chapter 7'},
  { value: 'Chapter 8'},
  { value: 'Chapter 9'},
  { value: 'Chapter 10'},
]
