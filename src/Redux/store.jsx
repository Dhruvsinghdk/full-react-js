import { configureStore } from "@reduxjs/toolkit";

import cntReducer from "./Counterslice"

const store = configureStore({
    
    reducer:{
        mycounter:cntReducer,
    }
})
export default store;