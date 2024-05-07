"use client"

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset, selectCount } from "./counterSlice"

export default function Counter() {

   const { count } = useSelector(selectCount);
   const dispatch = useDispatch();
  

  return (
    <>
       <h1> { count } </h1>
       <hr />
      <button onClick={() => dispatch(decrement())}> -- </button>
      <button onClick={() => dispatch(increment())}> ++ </button>
      <button onClick={() => dispatch(reset())}> Reset </button>
    </>
  )
}

 

