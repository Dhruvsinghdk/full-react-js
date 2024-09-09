import { useState } from "react";
import { createContext } from "react";
import Unauth from "../src/Unauth";



const userContext = createContext();


const Colorcontext = ({children})=>{
    
    const [user , setuser] = useState({name:"", auth:false})
    
    const userlogin = (nm)=>{
        setuser({name:nm, auth:true})
    }
    
    const userlogout = ()=>{
        setuser({name:"", auth:false})
    }

    return(
        <>
        
        <userContext.Provider value={{user, userlogin , userlogout}}>
        {children}
        </userContext.Provider>

        </>
    );
}
export default Colorcontext;
export {userContext};
////
Unauth
import { useContext, useState } from "react";
import { userContext } from "./Colorcontext";





const Unauth = ()=>{

    const [nmval , setnmval] = useState("");
    const {userlogin} = useContext(userContext);

    return(
        <>
        <h1>Login form</h1>
        Enter name : <input type="text" value={nmval} onChange={(e)=>{setnmval(e.target.value)}}/>
        <button onClick={()=>{userlogin(nmval)}} >Login </button>
        </>
    );
}
export default Unauth;
// //// 
auth
import { useContext } from "react";
import { userContext } from "./Colorcontext";



const Authuser = ()=>{
    const {user, userlogout} = useContext(userContext);

    return(
        <>
        <h1>Welcome : {user.name} </h1>
        <button onClick={()=>{userlogout()}}>Logout</button>
        </>
    );
}
export default Authuser;
//////////////
Appjsx
import { useContext } from "react";
import Authuser from "./Authuser";
import Unauth from "./Unauth";
import { userContext } from "./Colorcontext";



const App = ()=>{
  const {user} = useContext(userContext);

  return(
  <>
  {user.auth?<Authuser/> :<Unauth/> }

  {/* <Authuser/>
  <Unauth/> */}

  </>
  );
}
export default App; 

