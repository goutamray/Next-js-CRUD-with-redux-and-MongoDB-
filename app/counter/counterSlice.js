import { createSlice } from "@reduxjs/toolkit";


// create slice 
const counterSlice = createSlice({
  name : "counter",
  initialState : { 
    count : 0
  },
  reducers : {
    
  },
 extraReducers : () => {}
  
})




// export selector 


// export default action
export const { } = counterSlice.actions

// export reducer 
export default counterSlice.reducer; 
