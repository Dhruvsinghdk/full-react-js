import { createSlice } from "@reduxjs/toolkit";


const Todoslice = createSlice({
    name:"Task",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state , actions)=>{
            state.task.push(actions.payload)
        },
        recdelete:(state , actions)=>{
            state.task = state.task.filter(item=>item.id!=actions.payload)
        },
        
        done:(state , actions)=>{
            for(var i=0; i<state.task.length; i++)
                {
                    if(state.task[i].id==actions.payload){
                        state.task[i].status = true;
                    }
                }
        },
        
        undone:(state, actions)=>{
            for(var i=0; i<state.task.length; i++){
                if(state.task[i].id == actions.payload){
                    state.task[i].status = false;
                }
            }
        },

        editDataSave:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                state.task[i].tsk=actions.payload.tsk;
                }
            }
            
        }
        
    }
})
export default Todoslice.reducer;
export const {addtask, recdelete, done , undone, editDataSave} = Todoslice.actions;
