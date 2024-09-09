question 1 :
// to import an images in browser

import img1 from "../images/R1.jpg"
import img2 from "../images/R2.jpg"
import img3 from "../images/R3.jpg"

const App = ()=>{
  return(
    <>
    <div className='head'>
    <h1>Welcome to bhopal</h1>
    <h2>Hello friend</h2>
</div>
<img src={img1} style={{width:"500px"}}/><br/><br/>
<img src={img2} style={{width:"350px"}}/><br/><br/>
<img src={img3} style={{width:"400px"}}/>

  </>
  );
}

export default App;

///////////////////////////////////////////////////////////////////////
question 2 :

//                                        Without varibale
// import img1 from "../images/R1.jpg"
// import img2 from "../images/R2.jpg"
// import img3 from "../images/R3.jpg"
const App = ()=>{
  return(
    <>
    <div className='head'>
    <h1>Welcome to bhopal</h1>
    <h2>Hello friend</h2>
</div>


<img src="public/images/R3.jpg" style={{width:"500px"}}/>

   <div className="data">
    hello
   </div>

    </>
  );
}

export default App;


///////////////////////////////////////////////////////////////////////////////////
question 3 :

import Carousel from 'react-bootstrap/Carousel';

const App = ()=>{
  return(
    <>
    
    <h1>Welcome to bhopal</h1>
    <h2>Hello friend</h2>
    <Carousel>
      <Carousel.Item>
        <img src="public/images/R1.jpg"style={{height:"1200px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/R2.jpg" style={{height:"1200px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/R3.jpg" style={{height:"1200px"}}/>
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

export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////


