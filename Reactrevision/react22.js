import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";





const App = ()=>{
  return(
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="Home" element={<Home/>} />
      <Route path="Dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;
////
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
////
// Topnavbarimport Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Topnavbar = ()=>{

  const [input , setinput] = useState({});

  const [name , setname] = useState("");
  const [mail, setmail] = useState("");

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
//  Login methord 
    const [showlogin, setShowlogin] = useState(false);
    const handleCloselogin = () => setShowlogin(false);
    const handleShowlogin = () => setShowlogin(true);
   
    // const handlelogin=()=>{
    //   let api=`http://localhost:3000/customer?userid=${userid}`
    //   axios.get(api).then((res)=>{
    //      if (res.data.length>=1)
    //      {
    //         if (res.data[0].password==pwd)
    //         {
    //           localStorage.setItem("uname", res.data[0].name) 
    //           localStorage.setItem("uemail", res.data[0].email)
 
    //          mynav("/dashboard");
    //          setShowlogin(false)
    //         }
    //         else 
    //         {
    //          alert("Wrong Password!!!")
    //         }
    //      }
    //      else 
    //      {
    //        alert("Galat user")
    //      }
 
    //   })
    // }

    const mynav = useNavigate();

    const handlelogin = ()=>{
      let api = `http://localhost:3000/Info?Name=${name}`
      axios.get(api).then((res)=>{
        if(res.data.length>=1){
          if(res.data[0].Email == mail){
            localStorage.setItem("uname",res.data[0].Name)
            localStorage.setItem("umail",res.data[0].Email)

            mynav("/Dashboard")
            setShowlogin(false)
          }
          else{
            alert("Wrong Password")
          }
        }
        else{
          alert("Wrong User")
        }
      })
    }
  
    return(
        <>
        <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="Home">Home</Nav.Link>
            <Nav.Link href="#features" onClick={handleShowlogin} >Login</Nav.Link>
            <Nav.Link href="#pricing" onClick={handleShow}>Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}


{/* LOgin methord */}


<Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              Name : 
              <Form.Control
                type="text" name='Name'  value={name} onChange={(e)=>{setname(e.target.value)}}
                
                autoFocus
              />
               <br/>
               <br/>
               Email address : 
               <Form.Control
                type="text" name='Email'  value={mail} onChange={(e)=>{setmail(e.target.value)}}
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
          <Button variant="secondary" onClick={handleCloselogin}>
            Close
          </Button>
          <Button variant="primary" onClick={handlelogin} >
           Login
          </Button>
        </Modal.Footer>
      </Modal>

     




 <ToastContainer />
        </>
    );
}
export default Topnavbar;
/////


const name = localStorage.getItem("uname")
const email = localStorage.getItem("umail")

const Dashboard = ()=>{
    return(
        <>
        Name : {name}
        Email : {email}
        </>
    );
}
export default Dashboard;
