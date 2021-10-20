import 'react-quill/dist/quill.snow.css';
import './Form.css';

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
      pathname : "/addQuestion/standard/board/subject/chapter/module"
    });
  }

  const [value,setValue] = useState('');
  const [data,setData] = useState({});
  useEffect(()=>{
    if(typeof(props.location.state) === 'undefined'){
        pushPrevious();
    }else{
      const state = props.location.state;
      setValue(state.value);
      setData({
        'standard' : state.standard,
        'boardStream' : state.boardStream,
        'subject' : state.subject,
        'chapter' : state.chapter,
        'module' : value
      })
      console.log(state.standard,state.boardStream,state.subject,state.chapter, state.value);
    }
  },[])

  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Exercise
        </Typography>
        <div >
          <Typography>
            <h4><u>AddQuestion</u> - <a href="/addQuestion/standard"><u> Standard</u> </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board",
                  state : {
                      value : props.location.state.standard
                  }
                })
              }}> <u>Board</u> </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board/subject",
                  state : {
                    standard:props.location.state.standard,
                    value : props.location.state.boardStream
                  }
                })
              }} > <u>Subject</u> </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board/subject/chapter",
                  state : {
                    standard:props.location.state.standard,
                    borderStream : props.location.state.boardStream,
                    value : props.location.state.subject
                  }
                })
              }} > <u>Chapter</u> </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board/subject/chapter/module",
                  state : {
                    standard:props.location.state.standard,
                    borderStream : props.location.state.boardStream,
                    subject : props.location.state.subject,
                    value : props.location.state.chapter
                  }
                })
              }} > <u>Module</u> </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board/subject/chapter/module/exercise",
                  state : {
                    standard:props.location.state.standard,
                    borderStream : props.location.state.boardStream,
                    subject : props.location.state.subject,
                    chapter : props.location.state.chapter,
                    value : props.location.state.module,
                  }
                })
              }} > <u>Exercise</u> </a>
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
      <SimpleTable rows={exercises} label="Module" path="/addQuestion/standard/board/subject/chapter/module/question" data={data} />
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
