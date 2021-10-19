import 'react-quill/dist/quill.snow.css';
import './Standard.css';

import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import ReactQuill from 'react-quill';
import { Wrapper } from '../../components';
import Button from '@material-ui/core/Button';

import ComboBox from '../../components/AddQuestion/ComboBox';
import SimpleTable from '../../components/AddQuestion/SimpleTable';

const Standard = () => {

  const [text] = useState('');

  return (
    <Wrapper>
      <Card className="overflow-visible">
        <ReactQuill value={text} placeholder={'Write something'} />
      </Card>
      <br />
      <Typography variant="h4">
        Select Standard
      </Typography>
      <Typography variant="h6">
        Add Standard
      </Typography>
      <div>
        <ComboBox data={standards} label="Standard" />
        <Button variant="contained" color="primary">
          Add
        </Button>
      </div>
      <SimpleTable rows={standards} label='Standard' />
    </Wrapper>
  );
};

export default Standard;

const standards = [
  { value: '1st'},
  { value: '2nd'},
  { value: '3rd'},
  { value: '4th'},
  { value: '5th'},
  { value: '6th'},
  { value: '7th'},
  { value: '8th'},
  { value: '9th'},
  { value: '10th'},
  { value: '11th'},
  { value: '12th'},
]
