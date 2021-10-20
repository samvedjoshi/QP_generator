import 'react-quill/dist/quill.snow.css';

import React, { useState,useEffect } from 'react';

import { Typography } from '@material-ui/core';

import { Wrapper } from '../../components';
import Button from '@material-ui/core/Button';

import ComboBox from '../../components/AddQuestion/ComboBox';
import SimpleTable from '../../components/AddQuestion/SimpleTable';

const divStyle = {
  display: 'flex',
};
const Module = (props) => {

  const [text] = useState('');

  const pushPrevious = () =>{
    props.history.push({
      pathname : "/addQuestion/standard/board/subject/chapter"
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
      'chapter' : value
    })
    console.log(state.standard,state.boardStream,state.subject, state.value);
   }
 },[])

  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Module
        </Typography>
        <div >
          <Typography>
            <h4><u>AddQuestion</u> - <a href="/addQuestion/standard"> <u>Standard</u> </a>-
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
              }} > <u>Module</u> </a>
            </h4>
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6">
        Add Module
      </Typography>
      <div style={divStyle}>
        <ComboBox data={modules} label="Module" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Modules
      </Typography>
      {typeof(props.location.state) === 'undefined' ? null :
        props.location.state.subject === "Maths" ?
          <SimpleTable rows={modules} label="Module" path="/addQuestion/standard/board/subject/chapter/module/exercise" data={data} />
        : <SimpleTable rows={modules} label="Module" path="/addQuestion/standard/board/subject/chapter/module/question" data={data} />
      }
    </Wrapper>
  );
};

export default Module;

const modules = [
  { value:'Partial Integration',name: 'Partial Integration', num: 4},
  { value:'Triple Integration',name: 'Triple Integration', num: 4},
  { value:'Complex Numbers',name: 'Complex Numbers', num: 4},
  { value:'Matrices',name: 'Matrices', num: 4},
];
