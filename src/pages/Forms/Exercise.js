import 'react-quill/dist/quill.snow.css';

import React, { useState,useEffect } from 'react';

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

const Exercise = (props) => {

  const [text] = useState('');

  const pushPrevious = () =>{
    props.history.push({
      pathname : "/addQuestion/standard/board/subject/chapter/exercise"
    });
 }

 let value;
 useEffect(()=>{
   if(typeof(props.location.state) === 'undefined'){
      pushPrevious();
   }else{
    value = props.location.state.value
   }
 })

  return (
    <Wrapper>
      <Card className="overflow-visible">
        <ReactQuill value={text} placeholder={'Write something'} />
      </Card>
      <br />
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Exercise
        </Typography>
        <div >
          <Typography>
            <h4>AddQuestion - <a href="/addQuestion/standard"> Standard </a>-
              <a href="/addQuestion/standard/board"> Board </a>-
              <a href="/addQuestion/standard/board/subject"> Subject </a>
              <a href="/addQuestion/standard/board/subject/chapter/exercises"> Subject </a>
              </h4>
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6">
        Add Exercise
      </Typography>
      <div style={divStyle}>
        <ComboBox data={exercises} label="Module" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Exercises
      </Typography>
      <SimpleTable rows={modules} label="Module" path="/addQuestion/standard/board/subject/chapter/module/question" />
    </Wrapper>
  );
};

export default Exercise;

const exercises = [
  { name: 'Exercise 1', num: 4},
  { name: 'Exercise 2', num: 4},
  { name: 'Exercise 3', num: 4},
  { name: 'Exercise 4 ', num: 4},
];
