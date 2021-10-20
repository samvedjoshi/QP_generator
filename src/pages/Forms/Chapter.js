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

const Chapter = (props) => {

  const [text] = useState('');
  const [value,setValue] = useState('');
  const [data,setData] = useState({});

  const pushPrevious = () =>{
    props.history.push({
      pathname : "/addQuestion/standard/board/subject"
    });
 }


 useEffect(()=>{
   if(typeof(props.location.state) === 'undefined'){
      pushPrevious();
   }else{
    const state = props.location.state;
    setValue(state.value);
    setData({
      'standard' : state.standard,
      'boardStream' : state.boardStream,
      'subject' : value
    })
    {console.log(state.standard, state.boardStream, state.value)}
   }
 },[value])

  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Chapter
        </Typography>
        <div >
          <Typography>
            <h4><u>AddQuestion</u> - <a href="/addQuestion/standard"> <u>Standard</u> </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board",
                  state : {
                      value: props.location.state.standard
                  }
                })
              }}> <u>Board</u> </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board/subject",
                  state : {
                    standard: props.location.state.standard,
                    value: props.location.state.boardStream
                  }
                })
              }}> <u>Subject</u> </a> -
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board/subject/chapter",
                  state : {
                    standard:props.location.state.standard,
                    borderStream : props.location.state.boardStream,
                    value : props.location.state.subject
                  }
                })
              }} > <u>Chapter</u> </a>
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
      <SimpleTable rows={chapters} label="Chapter" path="/addQuestion/standard/board/subject/chapter/module" data={data} />
    </Wrapper>
  );
};

export default Chapter;

const chapters = [
  { value:'Differentiation',name: 'Differentiation', num: 4},
  { value:'Integration',name: 'Integration', num: 4},
  { value:'Complex Numbers',name: 'Complex Numbers', num: 4},
  { value:'Matrices',name: 'Matrices', num: 4},
];
