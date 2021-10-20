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
const links = {
  alignItems: 'right',
  marginRight: '15px'
}

const Subject = (props) => {

  const [text] = useState('');
  const [value,setValue] = useState('');
  const [data,setData] = useState({});

  const pushPrevious = () =>{
     props.history.push({
       pathname : "/addQuestion/standard/board"
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
        'boardStream' : state.value
      })
    }
  },[])
  
  return (
    <Wrapper>
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          Select Subject
        </Typography>
        <div >
          <Typography>
            <h4>AddQuestion - <a href="/addQuestion/standard"> Standard </a>-
              <a onClick={()=>{
                props.history.push({
                  pathname:"/addQuestion/standard/board",
                  state : {
                      value : props.location.state.standard
                  }
                })
              }}> Board </a>-
              <a href="."> Subject </a></h4>
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6">
        Add Subject
      </Typography>
      <div style={divStyle}>
        <ComboBox data={subjects} label="Subject" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
        Subjects
      </Typography>
      <SimpleTable rows={subjects} label="Subject" path="/addQuestion/standard/board/subject/chapter" data={data} />
    </Wrapper>
  );
};

export default Subject;

const subjects = [
  { value:'English',name: 'English', num: 4},
  { value:'Maths',name: 'Maths', num: 4},
  { value:'Science',name: 'Science', num: 4},
  { value:'Hindi',name: 'Hindi', num: 4},
  { value:'Accounting',name: 'Accounting', num: 4},
]
