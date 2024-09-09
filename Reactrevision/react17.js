question 1 :
// first install npm install -g json-server
// json-server --watch db.json
// npm i axios
// form handlling


import { useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{

  const [input , setinput] = useState({});

  const handleinput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setinput((values)=>({...values , [name]:value}))
    console.log(input)

  }

  return(
    <>
    <h1>Application Form</h1>
    <br/>
    <br/>
    <h2>Enter Name : <input type="text" name="rollno" value={input.rollno} onChange={handleinput} /></h2>
    <br/>
    <br/>
    <h2>City : <input type="text" name="name" value={input.name} onChange={handleinput} /></h2>
    <br/>
    <br/>
    <h2>Enter Fees : <input type="text" name="fees" value={input.fees} onChange={handleinput} /></h2>
    <br/>
    <br/>
    <Button variant="success">Submit</Button>
    </>
  );
}
export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
question 2 :

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const App = ()=>{
 
  const [input, setinput] = useState({});

  const handleinput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setinput((v)=>({...v , [name]:value}))
    console.log(input)
  }

  const handlesumbit = ()=>{
    const api = "http://localhost:3000/Students";
    axios.post(api,input).then((res)=>{
      alert("Data save!!")
    })
  }

  return(
    <>
    <h1>Application Form</h1>
    Name : <input type='text' name='name' value={input.name}  onChange={handleinput} />
    <br/>
    <br/>
    City : <input type='text' name='city' value={input.city} onChange={handleinput} />
    <br/>
    <br/>
    <Button variant='warning' onClick={handlesumbit}> click here </Button>
    </>
  );
}
export default App;