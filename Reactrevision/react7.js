question 1 :
// App.jsx
import College from "./College";
import Cybrom from "./Cybrom";



const App = ()=>{
  return(
    <>
    <h1 className="head">This is app part</h1>
    <Cybrom/>
    <College/>
    
    </>
  );
}

export default App;
// main .jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//// stle.css
.head{
    background-color:burlywood;
}
body{
    background-color: aqua;
}
.data{
    background-color: brown;
}
.college{
    background-color: chocolate;
}



// Cybrom.jsx
const Cybrom = ()=>{
    return(
        <>
        <h1 className="data">This is Cybrom part</h1>
        </>
    );
}
export default Cybrom;


// college.jsx

const College = ()=>{
    return(
        <>
        <h1 className="college">This is college part</h1>
        </>
    );
}
export default College;
/////////////////////////////////////////////////////////////////////
Question 2 :

https://react-bootstrap.netlify.app/docs
install npm from react bootstrap


import Button from 'react-bootstrap/Button';

const App = ()=>{
  return(
    <>
    <h1>Welcome to bhopal</h1>
    <h2>Hello friend</h2>
    <Button variant='primary'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='secondary'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='success'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='warning'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='danger'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='info'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='outline-primary'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='outline-secondary'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='outline-success'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='outline-warning'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='outline-danger'>click here!!</Button>
    <br/>
    <br/>
    <Button variant='outline-info'>click here!!</Button>
    <br/>
    <br/>
    </>
  );
}
// main.jsx
export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./style.css";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

"dependencies": {
  "bootstrap": "^5.3.3",/////////////////// check here
  "react": "^18.3.1",
  "react-bootstrap": "^2.10.4",
  "react-dom": "^18.3.1"
},
//////////////////////////////////////////////////////////////////////
question 3 :
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const App = ()=>{
  return(
    <>
    <h1>Welcome to bhopal</h1>
    <h2>Hello friend</h2>
    <div style={{width:"500px"}}>
    <Alert  variant="danger" dismissible>
          This is a alert—check it out!
        </Alert><br/><br/>
        <Alert  variant="warning" dismissible>
          This is a alert—check it out!
        </Alert><br/><br/>
        <Alert  variant="info" dismissible>
          This is a alert—check it out!
        </Alert><br/><br/>
        <Alert  variant="success" dismissible>
          This is a alert—check it out!
        </Alert><br/><br/>
    </div>

    </>
  );
}

export default App;
////////////////////////////////////////////////////////////////////
Question 4 :
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
const App = ()=>{
  return(
    <>
    <h1>Welcome to bhopal</h1>
    <h2>Hello friend</h2>
    <div style={{width:"800px"}}>
    <Alert variant='success'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Alert>
    </div>
    </>
  );
}

export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
question 5:

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
const App = ()=>{
  return(
    <>
    <h1>Welcome to bhopal</h1>
    <h2>Hello friend</h2>
    <div style={{width:"800px"}}>
    <h1>
        Example heading <Badge bg="success">New</Badge>
      </h1>



    {/* <Alert variant='success'>
    <h1>New</h1>
    </Alert> */}
    </div>
    </>
  );
}

export default App;


//////////////////////////////////////////////////////////////////////////////////////////






