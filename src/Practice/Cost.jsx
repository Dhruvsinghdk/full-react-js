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