question 1:


const App = ()=>{
  
    const display = ()=>{
      alert("welcome");
    }
  
  
    return(
      <>
      <button onClick={display}>click</button>
  
      </>
    );
  }
  export default App;
//////////////////////////////////////////////////////////////
question 2:

import Button from 'react-bootstrap/Button';


const App = ()=>{
  const myname = (fnm,snm)=>{

    alert("his name "+fnm+" "+snm);
  
}


  return(
    <>
    
    <Button variant='success' onClick={()=>{myname("rohan","sharma")}}>click</Button>

    </>
  );
}
export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////
question 3:

import Button from 'react-bootstrap/Button';


const App = ()=>{
  const event = (nm,e)=>{
    alert("name = "+(nm)+"Type : "+(e.type))
  }


  return(
    <>

    <Button variant='success' onClick={(e)=>{event("Snajay",e)}}>click here</Button>

    </>
  );
}
export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
question 4:

import Button from 'react-bootstrap/Button';


const App = ()=>{
  
  const event = (e)=>{
  alert("Welcome "+e.target.name+" "+e.target.value);
  }


  return(
    <>

    <Button variant='success' name="btn1" value="button" onClick={event}>click here</Button>

    </>
  );
}
export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
question 5:

import Button from 'react-bootstrap/Button';


const App = ()=>{
  
  

const handleclick = (a)=>{
  const b = a.target.name;
  const c = a.target.value;
  alert("Name  "+b+" "+c);

}

  return(
    <>

    

    <input type='text' name="city" value="Bhopal" onClick={handleclick} />



    </>
  );
}
export default App;


