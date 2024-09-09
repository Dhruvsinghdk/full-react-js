question 1 ;
// npm i react-router-dom

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./WebPage/Home";
import Contact from "./WebPage/Contact";
// import Home from "./WebPage/Layout";
// import Home from "./WebPage/About";
import Layout from "./WebPage/Layout";
import About from "./WebPage/About";

const App = ()=>{
  return(
    <>
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    {/* <Route index element={<Home/>}/> */}

      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
///

About.jsx

import React from 'react'

export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <h1>About company</h1>

      <div>
        


      </div>

    </div>
  )
}
///
Contact.jsx
import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1>Contact us page</h1>
    </div>
  )
}
///
////////////////////////////////////////////////////////////////////////////////////
// About.jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const About = ()=>{
    return(
        <>
        <h1>ABout Page</h1>

        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="Home">Home</Nav.Link>
            <Nav.Link as={Link} to="About">About</Nav.Link>
            <Nav.Link as={Link} to="Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <hr size="4" color='yellow'/>
      <Outlet/>
      <hr size="4" color='cyan'/>
        </>
    );
}
export default About;
///
// Layout.jsx
import { Link, Outlet } from "react-router-dom";



const Layout = ()=>{
    return(
        <>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        
        <hr size="4" color="orange"/>


        <Outlet/>


        <hr size="4" color="blue"/>

        </>
    );
}
export default Layout;
