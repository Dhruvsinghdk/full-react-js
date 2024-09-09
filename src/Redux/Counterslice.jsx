import { createSlice } from "@reduxjs/toolkit";





const Counterslice = createSlice({
    
    name:"mycounter",
    
    initialState:{
        cnt:0
    },
    reducers:{
        increment:(state)=>{
            state.cnt = state.cnt+1;
        },
        decrement:(state)=>{
            state.cnt = state.cnt-1;
        }
    }
})

export default Counterslice.reducer;

export const {increment , decrement} = Counterslice.actions;
