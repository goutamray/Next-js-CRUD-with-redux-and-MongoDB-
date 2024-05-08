import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/counter/counterSlice"
import todoReducer from "@/app/todo/todoSlice"

// create store 
const store = configureStore({
   reducer : {
     counter : counterReducer,
     todo : todoReducer,
   },
   devTools : true,
})


// export default store 
export default store; 









