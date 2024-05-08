

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// fetch all todos 
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async() => {
    const response = await axios.get(`http://localhost:3000/api/todo`); 

    return response.data.todos;     
  }
);   

// create todos
export const createTodo = createAsyncThunk("todo/createTodo", async(data) => {
    const response = await axios.post(`http://localhost:3000/api/todo`, data); 

    return response.data.todo;     
  }
);    

// delete todos
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async(id) => {
    const response = await axios.delete(`http://localhost:3000/api/todo?id=${id}`); 

    return id;     
  }
);    




