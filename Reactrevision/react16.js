question 1:


import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{

  const [cnt, setcnt]  = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setcnt(cnt+1);
    },3000)
  })
  
  return(
    <>
    <h1>Welcome to bhopal : {cnt} </h1>

    </>
  );
}
export default App;


/////////////////////////////////////////////////////////////////////////
question 2:
// array function


import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{

  const [cnt, setcnt]  = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setcnt(cnt+1);  // only 1 render only 
    },3000)
  },[])
  
  return(
    <>
    <h1>Welcome to bhopal : {cnt} </h1>

    </>
  );
}
export default App;
/////////////////////////////////////////////////////////////////////////////////
question 3 :

// program
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{

  const [cnt, setcnt]  = useState(0);
  const [multi, setmulti] = useState(0);

  useEffect(()=>{
    setmulti(cnt*2);
  },[cnt])


  return(
    <>
    <h1>Welcome to bhopal </h1>
    <h2>My counter : {cnt}</h2>
    <h2>My multiplication : {multi}</h2>
    <Button variant="success" onClick={()=>{setcnt(cnt+1)}} >Click here</Button>
    </>
  );
}
export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////
question 4 :


import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const App = ()=>{
  const [name , setname] = useState("");
  const [city, setcity] = useState("");
  
  const handle = ()=>{
    console.log({ 
    name:name,
    city:city })
  }

  return(
    <>
    <h1>Application form</h1>
    <br/>
    Enter name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
    <br/>
    <br/>
    Enter city : <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}} />
    <br/>
    <br/>
    <Button variant="success" onClick={handle} >Submit</Button>

    </>
  );
}
export default App;
