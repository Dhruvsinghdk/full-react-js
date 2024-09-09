// website design


import Topbanner from './components/Topbanner';
import Topmenu from './components/Topmenu';
import Card from './components/Card';
import Homecard from './components/Card';
const App = ()=>{
  return(
    <>
    <Topmenu/>
    <Topbanner/>
    <h1 align = "center" style={{color:"Highlight",backgroundColor:"InfoText"}}>This is our Portfolio website</h1>
    <Homecard/>
    
    </>
  );
}

export default App;
/////////////////////////////////////
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topmenu = ()=>{
    return(
        <>
         <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        </>
    );
}


export default Topmenu;

////////////////////////////////
import Carousel from 'react-bootstrap/Carousel';


const Topbanner = ()=>{
    return(
        <>
        <Carousel>
      <Carousel.Item>
        <img src='public/images/R1.jpg' width="100%" height="500px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='public/images/R2.jpg' width="100%" height="500px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='public/images/R3.jpg' width="100%" height="500px"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    );
}
export default Topbanner;
//////////////////////////////////////////
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Homecard = ()=>{
    return(
        <>
        <Container>
        <Row>
            <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/R4.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/R5.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
            <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/R6.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
            
        </Row>
        </Container>
        </>
    );
}
export default Homecard;

