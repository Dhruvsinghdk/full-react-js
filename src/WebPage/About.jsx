
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