question 1:

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = ()=>{
  return(
    <>
    <Container>
      <Row>
        <Col className='bg-danger p-5 text-white'>
        <h1>Welcome</h1>
        </Col>
        <Col className='bg-warning p-5 text-white'>
        <h1>Welcome</h1>
        </Col>
        <Col className='bg-success p-5 text-white'>
        <h1>Welcome</h1>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
      <Col md={6} className='bg-danger p-5 text-white'>
        <h1>Welcome</h1>
        </Col>
        <Col md={3} className='bg-success p-5 text-white'>
        <h1>Welcome</h1>
        </Col>
        <Col md={3} className='bg-dark p-5 text-white'>
        <h1>Welcome</h1>
        </Col>
      </Row>



    </Container>
    </>
  );
}

export default App;
///////////////////////////////////////////////////////////////////////////
question 2:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import img from "../public/images";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const App = ()=>{
  return(
    <>
    <Container>
    <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
      <Carousel.Item>
        <img src='public/images/R1.jpg' width="100%" height="400"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='public/images/R2.jpg' width="100%" height="400"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='public/images/R3.jpg' width="100%"height="400" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card style={{ width: '18rem', float:"left" }}>
      <Card.Img variant="top" src="public/images/R1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', justifyContent:"right", padding:"20px" }}>
      <Card.Img variant="top" src="public/images/R2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', justifyContent:"left" ,padding:"20px" }}>
      <Card.Img variant="top" src="public/images/R3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   

    </Container>
    </>
  );
}

export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////






