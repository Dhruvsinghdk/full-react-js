question 1 :

// hooks

import { Button } from "bootstrap";

import { useState } from "react";

const App = ()=>{
  
const [name, setname] = useState("Rohan");

const nm = ()=>{
  setname("Mohit")
}

  return(
    <>

    <h1>Name : {name}</h1>
    <button onClick={nm} >Click here</button>

    </>
  );
}
export default App;

////////////////////////////////////////////////////////////////////////////////////////
question 2 :

// with stylling in hooks 


import { useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{

  const [color, setcolor] = useState("red");

  return(
    <>

    <h1 style={{color:color}}>Welcome bhopal</h1>
    <Button variant="primary" onClick={()=>{setcolor("blue")}}>Blue</Button>
    <Button variant="success" onClick={()=>{setcolor("green")}}>Green</Button>
    <Button variant="danger" onClick={()=>{setcolor("red")}}>Red</Button>
    <Button variant="warning" onClick={()=>{setcolor("yellow")}}>Yellow</Button>

    </>
  );
}
export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////
question 3 :


import { useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{

  const [color, setcolor] = useState(0);


  return(
    <>

    <h1>Welcome bhopal</h1>
    <h1>Count : {color}</h1>

    <Button onClick={()=>{setcolor(color+1)}}>inc</Button>
    <Button variant="success" onClick={()=>{setcolor(color-1)}}>dec</Button>
  
    </>
  );
}
export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////
question 4 :


import { useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{

  const [color, setcolor] = useState(0);

  const mydecc = ()=>{
    if(color<=0){
      alert("No less");
    }
    else{
      setcolor(color-1)
    }
  }

  return(
    <>

    <h1>Welcome bhopal</h1>
    <h1>Count : {color}</h1>

    <Button variant="success" onClick={()=>{setcolor(color+1)}}>Increment</Button>
    <Button variant="danger" onClick={mydecc}>Decrement</Button>
  <Button variant="dark" onClick={()=>{setcolor(0)}}> Reset</Button>

    </>
  );
}
export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

