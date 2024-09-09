import { configureStore } from "@reduxjs/toolkit";

import tsk from './Todoslice'

const store = configureStore({
    reducer:{
        Task:tsk,
    }
})
export default store;
