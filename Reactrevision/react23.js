import { useState } from "react";
import Comp1 from "./Comp1";



const Context = ()=>{

    const [user, setuser] = useState("Sammy");

    return(
        <>
        <h1>User : {user}</h1>

      <Comp1 comp1 = {user} />
        
        </>
    );
}
export default Context;

/////////////////////////////////
import Comp2 from "./Comp2";



const Comp1 = ({comp1})=>{


    return(
        <>
        <h1>User1 : </h1>
        
       <Comp2 comp2 = {comp1} />
        </>
    );
}
export default Comp1;
//
import Comp3 from "./Comp3";



const Comp2 = ({comp2})=>{



    return(
        <>
        <h1>User2 : </h1>

        <Comp3 comp3 = {comp2} />

        </>
    );
}
export default Comp2;
////





const Comp3 = ({comp3})=>{



    return(
        <>
        <h1>User 3 : {comp3}</h1>
        
        </>
    );
}
export default Comp3;
//////

