import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/counter/counterSlice"

// create store 
const store = configureStore({
   reducer : {
     counter : counterReducer,
   },
   devTools : true,
})


// export default store 
export default store; 









