import { configureStore } from "@reduxjs/toolkit";

import color from "./Colorslice"

const store = configureStore({
    reducer:{
        mycolor:color,
    }
})
export default store;
//////
import { createSlice } from "@reduxjs/toolkit";



const Colorslice = createSlice({
    name:"mycolor",

    initialState:{
        color:"red"
    },

    reducers:{
        change:(state)=>{
            state.color = "green"
        }
    }
});
export default Colorslice.reducer;
export const {change} = Colorslice.actions;
/////////
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
/////////
import { useDispatch, useSelector } from "react-redux";

import { change } from "./reduxtoolkit/Colorslice";




const App = ()=>{
    const c = useSelector((state)=>state.mycolor.color);
    const dispatch = useDispatch();
  

    return(
        <>
        <h1>welcome</h1>
        <button onClick={()=>{dispatch(change())}}>change</button>

        <div style={{backgroundColor:c, height:"300px", width:"300px"}}></div>
        
        </>
    );
}
export default App;
