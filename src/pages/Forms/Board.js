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

const Board = (props) => {

  const [text] = useState('');
  const pushPrevious = () =>{
    props.history.push({
      pathname : "/addQuestion/standard"
    });
 }

 const [data,setData] = useState({});
 const [value,setValue] = useState('');
 useEffect(()=>{
   if(typeof(props.location.state) === 'undefined'){
      pushPrevious();
   }else{
    const _value = props.location.state.value
    setValue(_value);
    setData({
      'standard' : value,
    });
    
   }
 },[value])

  return (
    <Wrapper>
      <Card className="overflow-visible">
        <ReactQuill value={text} placeholder={'Write something'} />
      </Card>
      <br />
      <div className="flex-container" style={divStyle}>
        <Typography variant="h4">
          {console.log(value)}
          {value>10 ?
            "Select Stream" : "Select Board"
        }
        </Typography>
        <div >
          <Typography>
            <h4>AddQuestion - <a href="/addQuestion/standard"> Standard </a>-
              <a href="."> Board </a>-
              </h4>
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6">
      {value>10 ?
            "Add Stream" : "Add Board"
        }
      </Typography>
      <div style={divStyle}>
        <ComboBox data={boards} label="Board" />
        <Button variant="contained" color="primary" style={{minWidth: '80px', marginLeft: '10px'}}>
          Add
        </Button>
      </div>
      <br />
      <Typography variant="h5">
      {value>10 ?
            "Streams" : "Boards"
        }
      </Typography>
      {value > 10 ?
        <SimpleTable rows={streams} label="Board" path="/addQuestion/standard/board/subject" data={data}/>
      : <SimpleTable rows={boards} label="Board" path="/addQuestion/standard/board/subject" data={data} />
      }
    </Wrapper>
  );
};

export default Board;

const boards = [
  { value:'CBSE',name: 'CBSE'},
  { value:'ICSE',name: 'ICSE'},
  { value:'SSC',name: 'SSC'},
];
const streams = [
  { value:'Science',name: 'Science'},
  { value:'Commerce',name: 'Commerce'},
  { value:'Biology',name: 'Biology'},
];
