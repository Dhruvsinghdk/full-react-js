

import { useContext, useState } from "react";
import { colorContext } from "../App";

const Cybrom = ()=>{
    const {color, setcolor} = useContext(colorContext);

    const [val, setval] = useState("");

    return(
        <>
        Enter color : <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}} />

        <button onClick={()=>{setcolor(val)}} >Click here</button>
        
        <div style={{backgroundColor:color, height:"300px" , width:"300px"}}></div>
        </>
    );
}
export default Cybrom;
////
import { createContext, useState } from "react";
import Cybrom from "./Style/Cybrom";


 const colorContext = createContext();


const App = ()=>{

  const [color,setcolor] = useState("blue");

  return(
    <>
    <h1>welcome</h1>
    <colorContext.Provider value={{color,setcolor}}>
    <Cybrom/>
    </colorContext.Provider>
    

    </>
  );
}
export default App;
export {colorContext};

/////////////////////////////////////////////////
import { useContext } from "react";
import { mycontext } from "./Colorcontext";



const App = ()=>{

  const {color , setColor} = useContext(mycontext);
  

  return(
    <>
    <h1 style={{color:color}}>welcome</h1>

    <button onClick={()=>{setColor("red")}}>Click here</button>
    

    </>
  );
}
export default App; 
////
import { useState } from "react";
import { createContext } from "react";



const mycontext = createContext();


const Colorcontext = ({children})=>{
    const [color, setColor] = useState("blue");


    return(
        <>
        <mycontext.Provider value={{color , setColor}}>
          {children}
        </mycontext.Provider>

        </>
    );
}
export default Colorcontext;
export {mycontext};
////
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colorcontext from './Colorcontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  

    
<Colorcontext>
 <App />
</Colorcontext>
   
  
 
)
