import { configureStore } from "@reduxjs/toolkit";

import color from "./Colorslice"

const store = configureStore({
    reducer:{
        bgcolor:color,
    }
})
export default store;
//////
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './reduxtoolkit/store.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  
<Provider store={store}>
    <App/>
</Provider>
)
//////////
import { createSlice } from "@reduxjs/toolkit";



const Colorslice = createSlice({
  name:"bgcolor",
  initialState:{
    color:"pink"
  },
  reducers:{
    changecolor:(state , actions)=>{
        console.log(actions.payload);
        state.color = actions.payload
    }
  }
});
export default Colorslice.reducer;
export const {changecolor} = Colorslice.actions;
///////
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changecolor } from "./reduxtoolkit/Colorslice";




const App = ()=>{

    const bgcolor = useSelector((state)=>state.bgcolor.color)
    const dispatch = useDispatch();
    const [val , setval] = useState("");
    return(
        <>
        <h1>Welcome to toolkit Example</h1>
        Enter Color : <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
        <button onClick={()=>{dispatch(changecolor(val))}}>Change</button>
        <br/>
        <br/>
        <div style={{width:"300px", height:"300px", backgroundColor:bgcolor}}></div>
        </>
    );
}
export default App;
