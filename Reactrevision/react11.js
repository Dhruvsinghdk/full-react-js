question 1:

import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';



const App = ()=>{
  return(
    <>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="171x180"
        src="public/images/R5.jpg"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

      <br/>
      <br/>
        
          <Image src="public/images/R1.jpg" rounded style={{width:"300px"}} />
       
          <Image src="public/images/R2.jpg" roundedCircle style={{width:"300px"}} />
       
          <Image src="public/images/R3.jpg" thumbnail style={{width:"300px"}} />
   






    </>
  );
}

export default App;


////////////////////////////////////////////////////////////////////////////////////////
question 2:
only for study 


import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const App = ()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal

      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default App;


//////////////////////////////////////////////////////////////////////////////////////
question 3:


// install ant design 
// google search  install ant npm




import { DatePicker } from 'antd';

const App = ()=>{
  
  return(
    <>
<DatePicker />;    

    </>
  );
}

export default App;
///////////////////////////////////////////////////////////////////////////////////////
question 4 :

import { DatePicker } from 'antd';
import { Button, message } from 'antd';
import React from 'react'
// import "antd/dist/antd.css"; 
import { Anchor } from 'antd'; 

const App = ()=>{
  const display = ()=>{
  message.success("data sucessfully stored");
  }
  return(
    <>
<DatePicker />;  
<Button type='primary' onClick={display}>Click Me</Button>  

    </>
  );
}

export default App;


//////////////////////////////////////////////////////////////////////////////
question 5:

// first install 
// install npm icons 
and anything you want to use in npm 

import { DatePicker } from 'antd';
import { Button, message } from 'antd';
import React from 'react'
// import "antd/dist/antd.css"; 
import { Anchor } from 'antd'; 
import { Dropdown } from "antd";
import { RxHalf2 } from "react-icons/rx";
import { FaMicrosoft } from "react-icons/fa6";


const App = ()=>{
  const display = ()=>{
  message.success("data sucessfully stored");
  message.warning("")
  }
  return(
    <>
<DatePicker />;  
<Button type='primary' onClick={display}>Click Me</Button>  
<RxHalf2 style={{fontSize:"100px"}}/>
<FaMicrosoft style={{fontSize:"100px"}} />
    </>
  );
}

export default App;



