"use client"

// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo } from "./todoSlice";
import { useEffect, useState } from "react";
import { createTodo, deleteTodo, fetchTodos } from "./todoApi";



const TodoPage = () => {
 const { todos } = useSelector(selectTodo);   
 const dispatch = useDispatch()

  const [input, setInput ] = useState({
    name : "",
    prority : ""
  });    


  // handle input change 
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }; 

// submit form 
const handleFormSubmit = (e) => {
   e.preventDefault(); 

   dispatch(createTodo(input)); 

   setInput({
    name : "",
    prority : ""
   })

}

// delete todo 
const handleTodoDelete = (id) => {
 dispatch(deleteTodo(id))
}; 

useEffect(() => {
  dispatch(fetchTodos());
}, [dispatch]); 

  return (
    <>
      <h1> Todo </h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Todo name" name="name" value={input.name} onChange={handleInputChange} />
        <input type="text" placeholder="Prority" name="prority"  value={input.prority} onChange={handleInputChange}/>
        <button type="submit"> Add </button>
      </form>
      <hr /> 
      <ul>   
         {
          todos.map((item, index) => {
            return <li key={index}> {item.name} <button onClick={() => handleTodoDelete(item._id)}> Delete</button></li>
          })
        }     
 
      </ul>
    </>
  )
}

export default TodoPage;




