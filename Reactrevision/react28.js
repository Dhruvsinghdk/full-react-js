import { configureStore } from "@reduxjs/toolkit";

import tsk from './Todoslice'

const store = configureStore({
    reducer:{
       mytask:tsk,
    }
})
export default store;
/////////
import { createSlice } from "@reduxjs/toolkit";



const Todo = createSlice({
    name:"mytask",
    initialState:{
        task:[]
    },
    reducers:{
        todolist:(state,actions)=>{
            state.task.push(actions.payload)
           
        }
    }
})
export default Todo.reducer;
export const {todolist} = Todo.actions;
////////////////
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todoslice, { todolist } from "./reduxtoolkit/Todoslice";




const App = ()=>{

    const mywork = useSelector((state)=>state.mytask.task);
    console.log(mywork)
    const [mytsk , setmytsk] = useState("");
    const dispatch = useDispatch();
    let sno = 0;
    const ans = mywork.map((key)=>{
        sno++
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.mywork}</td>
            </tr>
            </>
        );
    })
    
    return(
        <>
        Value : <input type="text" value={mytsk} onChange={(e)=>{setmytsk(e.target.value)}}/>
        <button onClick={()=>{dispatch(todolist({id:Date.now , mywork:mytsk}))}}>send</button>
        <hr size="4" color="green"/>
        <table>
            <tr>
                <th>Sno.</th>
                <th>Name</th>
            </tr>
            {ans}
        </table>
        </>
    );
}
export default App;
