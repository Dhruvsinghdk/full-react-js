 Topnavbar from

Topnavbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Layout from '../src/Layout';

const Topnavbar = ()=>{

  const [input , setinput] = useState({});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleinput = (e)=>{
      let name = e.target.name;
      let value = e.target.value;

      setinput((v)=>({...v , [name]:value}))
      console.log(input)
    }
    
    const handlesubmit = ()=>{
      let api = "http://localhost:3000/Info";
      axios.post(api, input).then((res)=>{
        setShow(false);
        toast.success("Registered SucessFully")
      })
    }
  


    return(
        <>
        <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="Home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing" onClick={handleShow}>Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              Name : 
              <Form.Control
                type="text" name='Name' onChange={handleinput}
                placeholder="name@example.com"
                autoFocus
              />
               <br/>
               <br/>
               Email address : 
               <Form.Control
                type="text" name='Email'  onChange={handleinput}
                placeholder="name@example.com"
                autoFocus
              />
              <br/>
              <br/>
              City : 
               <Form.Control
                type="text" name='City' onChange={handleinput}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>
           Registered
          </Button>
        </Modal.Footer>
      </Modal>

 <ToastContainer />
        </>
    );
}
export default Topnavbar;
/



// Layout
import { Outlet } from "react-router-dom";
import Topnavbar from "./Components/Topnavbar";



const Layout = ()=>{
    return(
        <>
        <Topnavbar/>
        
        <Outlet/>
        </>
    );
}
export default Layout;
//
// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";





const App = ()=>{
  return(
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="Home" element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;