
import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fetchTodos } from "./todoApi";


// create slice 
const todoSlice = createSlice({
  name : "todo",
  initialState : { 
    todos : [], 
  },
  reducers : {
 
  },
 extraReducers : (builder) => {
       // get all todo 
       builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload 
       })
       // create todo
       .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload) 
       })
       // delete todo 
       .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos =  state.todos.filter((data) => data._id !== action.payload)
       })
 }      
  
})


// export selector 
 export const selectTodo = ((state) => state.todo);     

// export default action
export const { } = todoSlice.actions; 

// export reducer 
export default todoSlice.reducer; 

