




import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const Header = ()=>{

  const [input , setinput] = useState({});

  const handleinput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setinput((values)=>({...values , [name]:value})) // 
    console.log(input)

  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    let url = "http://localhost:3000/Info";
    axios.post(url,input).then((res)=>{
        console.log(res)
        alert("Submitted");
    });
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
    <Button variant="success" onClick={handlesubmit} >Submit</Button>
    </>
  );
}
export default Header;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function Contact() {
  const [mydata, setmydata] = useState([]);

  useEffect(()=>{
    loaddata();
  },[])

  const loaddata = ()=>{
    let url = "http://localhost:3000/Info"

    axios.get(url).then((res)=>{
      console.log(res.data)
      setmydata(res.data)
    })
  }

  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.name}</td>
        <td>{key.id}</td>
        <td>{key.city}</td>
      </tr>
      </>
    );
  })


  return (
    <>
      <table>
      <th>Name</th>
      <th>Id</th>
      {ans}
      </table>
    </>
  )
}
/////////////////////////////////////////////////////////////////////////
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Cost = ()=>{
  return(
    <>
    <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="Home">Home</Nav.Link>
            <Nav.Link as={Link} to="About">About</Nav.Link>
            <Nav.Link as={Link} to="Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={{width:"900px", height:"500px",border:"4px dashed blue"}}>
        <Outlet/>
      </div>

    </>
  );
}
export default Cost;