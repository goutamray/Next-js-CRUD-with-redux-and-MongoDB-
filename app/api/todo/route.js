import mongodbConnect from "@/config/db";
import { NextResponse } from "next/server";
import Todo from "@/models/Todo";

/**
 * 
 * Get All todos
 */
export const GET = async() => {
  try {
    await mongodbConnect();

    const todos = await Todo.find();
    
    return NextResponse.json({ todos });  
  } catch (error) { 
    return NextResponse.json({ error : error.message });
   }
};


/**
 * 
 *  create todo
 */
export const POST = async(request) => {
  try {
    await mongodbConnect();

    const data = await request.json();

    const todo = await Todo.create({
      ...data
    });
    
    return NextResponse.json({ todo });  
  } catch (error) { 
    return NextResponse.json({ error : error.message });
   }
};


/**
 * 
 *  delete todo
 */
export const DELETE = async(request) => {
  try {
    await mongodbConnect();

    const { searchParams } = new URL(request.url); 
    const id =  searchParams.get("id"); 

    const todo = await Todo.findByIdAndDelete(id); 
    
    return NextResponse.json({ todo });  
  } catch (error) { 
    return NextResponse.json({ error : error.message });
   }
};







