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

const Chapter = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Chapter
        </Typography>
        <div >
          <Typography>
            <h4>AddQuestion - <a href="/addQuestion/standard"> Standard </a>-
              <a href="/addQuestion/standard/board"> Board </a>-
              <a href="/addQuestion/standard/board/subject"> Subject </a>-
              <a href="/addQuestion/standard/board/subject/chapter"> Chapter </a>
              </h4>
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6">
        Add Chapter
      </Typography>
      <div style={divStyle}>
        <ComboBox data={chapters} label="Chapter" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Chapters
      </Typography>
      <SimpleTable rows={chapters} label="Chapter" path="/addQuestion/standard/board/subject/chapter/module" />
    </Wrapper>
  );
};

export default Chapter;

const chapters = [
  { name: 'Differentiation', num: 4},
  { name: 'Integration', num: 4},
  { name: 'Complex Numbers', num: 4},
  { name: 'Matrices', num: 4},
];
