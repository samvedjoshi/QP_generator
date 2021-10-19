import 'react-quill/dist/quill.snow.css';
import './Chapter.css';

import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import ReactQuill from 'react-quill';
import { Wrapper } from '../../components';
import Button from '@material-ui/core/Button';

import ComboBox from '../../components/AddQuestion/ComboBox';
import SimpleTable from '../../components/AddQuestion/SimpleTable';

const Chapter = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <Card className="overflow-visible">
        <ReactQuill value={text} placeholder={'Write something'} />
      </Card>
      <br />
      <Typography variant="h4">
        Select Chapter
      </Typography>
      <Typography variant="h6">
        Add Chapter
      </Typography>
      <div className="flex-container">
        <ComboBox className="comboBox" data={chapters} label="Chapter" />
        <Button className="addButton" variant="contained" color="primary">
          Add
        </Button>
      </div>
      <SimpleTable rows={chapters} label="Chapter" />
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
