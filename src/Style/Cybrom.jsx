

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

