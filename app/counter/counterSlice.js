import { createSlice } from "@reduxjs/toolkit";


// create slice 
const counterSlice = createSlice({
  name : "counter",
  initialState : { 
    count : 0
  },
  reducers : {
    increment : (state, action) => {
      state.count ++ ;
    },
    decrement : (state, action) => {
      state.count -- ;
    },
    reset : (state, action) => {
      state.count = 0 ;
    },
  },

  
})




// export selector 
 export const selectCount = ((state) => state.counter); 

// export default action
export const { increment, decrement , reset} = counterSlice.actions; 

// export reducer 
export default counterSlice.reducer; 
